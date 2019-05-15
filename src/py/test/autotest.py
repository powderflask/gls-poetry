import org.transcrypt.autotester

import unsupported_features, workarounds

autoTester = org.transcrypt.autotester.AutoTester ()

autoTester.run (unsupported_features, 'unsupported_features')
autoTester.run (workarounds, 'workarounds')

autoTester.done ()
