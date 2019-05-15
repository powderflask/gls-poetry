from invoke import Collection, task


@task(help={'target': "An iterable of paths to be forcibly deleted."})
def clean(c, target=None):
    """
        Remove generated paths from code base
    """
    target = target or c.clean.target
    print("Cleaning: ", target)

    for path in target:
        c.run("{remove} {path}".format(remove=c.commands['rm -rf'], path=path))

@task
def transpile(c):
    """
        Transpile Python source to JS __target__ using Transcrypt and rollup the JS package
    """
    cmd = c.commands['transcrypt'].format(**c.transcrypt)
    print("Transpile: ", cmd)
    c.run(cmd)

    params = {**c.rollup, 'pkg' : c.transcrypt['pkg'],}
    cmd = c.commands['rollup'].format(**params)
    print("Rollup JS package:", cmd)
    c.run(cmd)


@task
def package(c):
    """
        Create the distribution from the src and rollup package
    """
    cmd = c.commands['package'].format(**c.package)
    print("Create dist: ", cmd)
    c.run(cmd)


@task(pre=[clean, transpile], post=[package])
def build(c):
    """
        Build dist from src using Transcrypt and Rollup
    """
    # clean, transpile, rollup, package
    pass


@task(pre=[build])
def deploy(c):
    """
        Deploy dist to github pages using git-directory-deploy
        https://github.com/X1011/git-directory-deploy
        https://help.github.com/en/articles/user-organization-and-project-pages
    """
    print("Deploying!")


@task
def test(c):
    """
        Run automated unit-tests and Transcrypt autotest
    """
    print("Unit tests...")
    for file in c.test['src_files']:
        cmd = c.commands['unittest'].format(**c.test, filename=file)
    c.run(cmd)

    print("Transcrypt autotest...")
    cmd = c.commands['autotest'].format(**c.test)
    c.run(cmd)
    print("Open {src_path}test/autotest.html to view autotest results".format(**c.test))


ns = Collection(clean, build, transpile, package, test, deploy)
PY_SRC_PATH = 'src/py/'
ns.configure({
    'clean': {
        'target': ('dist', '{}__target__'.format(PY_SRC_PATH)),
    },
    'rollup': {
        'src_path' : '{}__target__/'.format(PY_SRC_PATH),  # path to source JS pkg to be rolled up
        'dest_path' : 'src/js/',            # destination path for rolled up JS package
        'name' : 'gls_poetry',              # global name exported by JS package
    },
    'transcrypt' : {
        'src_path'  : PY_SRC_PATH,
        'pkg'      : 'gls_poetry_app.js',    # name of JS package to transpile
    },
    'package' : {
        'target': 'dist',
        'paths' : "LICENSE.txt src/.htaccess src/*.html src/*.txt src/css src/js"  # to copy to target
    },
    'test' : {
        'src_path'  : PY_SRC_PATH,
        'src_files' : ('gls_poetry/gl_square.py', 'gls_poetry/vocabulary.py'),  # basic test suite runs when sources are compiled
        'autotest'  : 'test/autotest.py',
    },
    'commands' : {
        'rm -rf' : "rm -rf",    # forcibly delete
        'rollup' : "rollup {src_path}{pkg} --o {dest_path}{pkg} --f iife --name '{name}'",  # npm rollup
        'transcrypt' : "python3 -m transcrypt -b -m -n -o {src_path}{pkg}",
        'package' : "mkdir {target} && cp -R {paths} {target}",
        'unittest' : "python3 {src_path}{filename}",
        'autotest' : "python3 -m transcrypt -r -m -n -o {src_path}{autotest} && python3 -m transcrypt -b -m -n -o {src_path}{autotest}",
    },
})
