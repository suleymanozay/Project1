$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/Contact.feature");
formatter.feature({
  "name": "Contact Details",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@sprint2"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 79\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-ODFPRUL\u0027, ip: \u0027192.168.0.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x0051A113+1548563]\n\tOrdinal0 [0x0049DDA1+1039777]\n\tOrdinal0 [0x0041E485+517253]\n\tOrdinal0 [0x003AFD34+64820]\n\tOrdinal0 [0x003AC61E+50718]\n\tOrdinal0 [0x003CB797+178071]\n\tOrdinal0 [0x003CB59D+177565]\n\tOrdinal0 [0x003C95FB+169467]\n\tOrdinal0 [0x003B160A+71178]\n\tOrdinal0 [0x003B2690+75408]\n\tOrdinal0 [0x003B2629+75305]\n\tOrdinal0 [0x004B71B7+1143223]\n\tGetHandleVerifier [0x005B2B46+507814]\n\tGetHandleVerifier [0x005B2864+507076]\n\tGetHandleVerifier [0x005B9F47+537511]\n\tGetHandleVerifier [0x005B3402+510050]\n\tOrdinal0 [0x004AF29C+1110684]\n\tOrdinal0 [0x004B938B+1151883]\n\tOrdinal0 [0x004B94F3+1152243]\n\tOrdinal0 [0x004B83F5+1147893]\n\tBaseThreadInitThunk [0x76896359+25]\n\tRtlGetAppContainerNamedObjectPath [0x77C17C24+228]\n\tRtlGetAppContainerNamedObjectPath [0x77C17BF4+180]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.syntax.bases.BaseClass.setUp(BaseClass.java:30)\r\n\tat com.syntax.steps.Hooks.start(Hooks.java:13)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:42)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:49)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:123)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:147)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:377)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:138)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.run(ForkedBooter.java:465)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:451)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I am logged into HRMS as an Admin",
  "keyword": "Given "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_am_logged_into_HRMS_as_an_Admin()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I navigated to Add Employe Page",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_navigated_to_Add_Employe_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I add \"A\", \"Jr\"  and \"A\"",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_add_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on Save",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_click_on_Save()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I pick Employee Id",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_pick_Employee_Id()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I navigated Employee List",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_navigated_Employee_List()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter valid Employee Id",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_enter_valid_Employee_Id()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click search button",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on Employee from table",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.click_on_Employee_from_table()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Modify Contact Details",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sprint2"
    },
    {
      "name": "@contact"
    }
  ]
});
formatter.step({
  "name": "I click on Contact Details  link",
  "keyword": "And "
});
formatter.match({
  "location": "ContacDetailsSteps.i_click_on_Contact_Details_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on  contact details Edit button",
  "keyword": "When "
});
formatter.match({
  "location": "ContacDetailsSteps.i_click_on_contact_details_Edit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I am able to add Employee Contact Details",
  "rows": [
    {
      "cells": [
        "Street1",
        "Street2",
        "City",
        "State",
        "Zip",
        "Country",
        "HomePhone",
        "Mobile",
        "WorkPhone",
        "WorkEmail",
        "OtherEmail"
      ]
    },
    {
      "cells": [
        "3210 Main St.",
        "Suit 300",
        "Duluth",
        "GA",
        "30027",
        "United States",
        "3335555555",
        "4445555555",
        "6665555555",
        "aa@synta.com",
        "aa@gma.com"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ContacDetailsSteps.i_am_able_to_add_Employee_Contact_Details(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on contact save button",
  "keyword": "And "
});
formatter.match({
  "location": "ContacDetailsSteps.i_click_on_contact_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat com.syntax.utils.CommonMethods.takeScreenshot(CommonMethods.java:104)\r\n\tat com.syntax.steps.Hooks.end(Hooks.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:50)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:49)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:123)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:147)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:377)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:138)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.run(ForkedBooter.java:465)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:451)\r\n",
  "status": "failed"
});
formatter.uri("file:src/test/resources/Features/Dependents.feature");
formatter.feature({
  "name": "Add Employee Dependents",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@sprint2"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 79\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-ODFPRUL\u0027, ip: \u0027192.168.0.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x0051A113+1548563]\n\tOrdinal0 [0x0049DDA1+1039777]\n\tOrdinal0 [0x0041E485+517253]\n\tOrdinal0 [0x003AFD34+64820]\n\tOrdinal0 [0x003AC61E+50718]\n\tOrdinal0 [0x003CB797+178071]\n\tOrdinal0 [0x003CB59D+177565]\n\tOrdinal0 [0x003C95FB+169467]\n\tOrdinal0 [0x003B160A+71178]\n\tOrdinal0 [0x003B2690+75408]\n\tOrdinal0 [0x003B2629+75305]\n\tOrdinal0 [0x004B71B7+1143223]\n\tGetHandleVerifier [0x005B2B46+507814]\n\tGetHandleVerifier [0x005B2864+507076]\n\tGetHandleVerifier [0x005B9F47+537511]\n\tGetHandleVerifier [0x005B3402+510050]\n\tOrdinal0 [0x004AF29C+1110684]\n\tOrdinal0 [0x004B938B+1151883]\n\tOrdinal0 [0x004B94F3+1152243]\n\tOrdinal0 [0x004B83F5+1147893]\n\tBaseThreadInitThunk [0x76896359+25]\n\tRtlGetAppContainerNamedObjectPath [0x77C17C24+228]\n\tRtlGetAppContainerNamedObjectPath [0x77C17BF4+180]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.syntax.bases.BaseClass.setUp(BaseClass.java:30)\r\n\tat com.syntax.steps.Hooks.start(Hooks.java:13)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:42)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:49)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:123)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:147)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:377)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:138)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.run(ForkedBooter.java:465)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:451)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I am logged into HRMS as an Admin",
  "keyword": "Given "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_am_logged_into_HRMS_as_an_Admin()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I navigated to Add Employe Page",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_navigated_to_Add_Employe_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I add \"A\", \"Jr\"  and \"A\"",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_add_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on Save",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_click_on_Save()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I pick Employee Id",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_pick_Employee_Id()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I navigated Employee List",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_navigated_Employee_List()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter valid Employee Id",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_enter_valid_Employee_Id()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click search button",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on Employee from table",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.click_on_Employee_from_table()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Add Employee Dependents",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sprint2"
    },
    {
      "name": "@dependents"
    }
  ]
});
formatter.step({
  "name": "I click on Dependents link",
  "keyword": "And "
});
formatter.match({
  "location": "AddDependentsSteps.i_click_on_Dependents_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on depents Add",
  "keyword": "When "
});
formatter.match({
  "location": "AddDependentsSteps.i_click_on_Add()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I am able to add Employee Dependents",
  "rows": [
    {
      "cells": [
        "Name",
        "Relationship",
        "Date of Birth"
      ]
    },
    {
      "cells": [
        "Dolores Umbridge",
        "Child",
        "1989-02-13"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AddDependentsSteps.i_am_able_to_add_Employee_Dependents(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on  depents save",
  "keyword": "And "
});
formatter.match({
  "location": "AddDependentsSteps.i_click_on_save()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat com.syntax.utils.CommonMethods.takeScreenshot(CommonMethods.java:104)\r\n\tat com.syntax.steps.Hooks.end(Hooks.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:50)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:49)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:123)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:147)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:377)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:138)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.run(ForkedBooter.java:465)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:451)\r\n",
  "status": "failed"
});
formatter.uri("file:src/test/resources/Features/PersonalDetails.feature");
formatter.feature({
  "name": "Personal Details",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@sprint2"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 79\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-ODFPRUL\u0027, ip: \u0027192.168.0.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x0051A113+1548563]\n\tOrdinal0 [0x0049DDA1+1039777]\n\tOrdinal0 [0x0041E485+517253]\n\tOrdinal0 [0x003AFD34+64820]\n\tOrdinal0 [0x003AC61E+50718]\n\tOrdinal0 [0x003CB797+178071]\n\tOrdinal0 [0x003CB59D+177565]\n\tOrdinal0 [0x003C95FB+169467]\n\tOrdinal0 [0x003B160A+71178]\n\tOrdinal0 [0x003B2690+75408]\n\tOrdinal0 [0x003B2629+75305]\n\tOrdinal0 [0x004B71B7+1143223]\n\tGetHandleVerifier [0x005B2B46+507814]\n\tGetHandleVerifier [0x005B2864+507076]\n\tGetHandleVerifier [0x005B9F47+537511]\n\tGetHandleVerifier [0x005B3402+510050]\n\tOrdinal0 [0x004AF29C+1110684]\n\tOrdinal0 [0x004B938B+1151883]\n\tOrdinal0 [0x004B94F3+1152243]\n\tOrdinal0 [0x004B83F5+1147893]\n\tBaseThreadInitThunk [0x76896359+25]\n\tRtlGetAppContainerNamedObjectPath [0x77C17C24+228]\n\tRtlGetAppContainerNamedObjectPath [0x77C17BF4+180]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.syntax.bases.BaseClass.setUp(BaseClass.java:30)\r\n\tat com.syntax.steps.Hooks.start(Hooks.java:13)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:42)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:49)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:123)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:147)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:377)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:138)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.run(ForkedBooter.java:465)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:451)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I am logged into HRMS as an Admin",
  "keyword": "Given "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_am_logged_into_HRMS_as_an_Admin()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I navigated to Add Employe Page",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_navigated_to_Add_Employe_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I add \"A\", \"Jr\"  and \"A\"",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_add_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on Save",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_click_on_Save()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I pick Employee Id",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_pick_Employee_Id()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I navigated Employee List",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_navigated_Employee_List()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter valid Employee Id",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_enter_valid_Employee_Id()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click search button",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on Employee from table",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.click_on_Employee_from_table()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Modify personal Details",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sprint2"
    },
    {
      "name": "@PersonDetails"
    }
  ]
});
formatter.step({
  "name": "I click on personal details edit button",
  "keyword": "When "
});
formatter.match({
  "location": "ModifyPDetailsSteps.i_click_on_personal_details_edit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I am able to modify personal details",
  "rows": [
    {
      "cells": [
        "DriverLicense",
        "ExpirationDate",
        "SSN",
        "SIN",
        "Gender",
        "MaritalStatus",
        "Nationality",
        "DOB"
      ]
    },
    {
      "cells": [
        "b0345786",
        "2021-02-04",
        "234-57-0999",
        "687430",
        "Male",
        "Married",
        "Panamanian",
        "1960-02-04"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ModifyPDetailsSteps.i_am_able_to_modify_personal_details(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on personal detail save button",
  "keyword": "And "
});
formatter.match({
  "location": "ModifyPDetailsSteps.i_click_on_personal_detail_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat com.syntax.utils.CommonMethods.takeScreenshot(CommonMethods.java:104)\r\n\tat com.syntax.steps.Hooks.end(Hooks.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:50)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:49)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:123)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:147)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:377)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:138)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.run(ForkedBooter.java:465)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:451)\r\n",
  "status": "failed"
});
formatter.uri("file:src/test/resources/Features/Qualification.feature");
formatter.feature({
  "name": "Add employee\u0027s qualifications",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@sprint2"
    }
  ]
});
formatter.scenario({
  "name": "Adding qualifications",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sprint2"
    },
    {
      "name": "@qualifications"
    }
  ]
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 79\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-ODFPRUL\u0027, ip: \u0027192.168.0.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x0051A113+1548563]\n\tOrdinal0 [0x0049DDA1+1039777]\n\tOrdinal0 [0x0041E485+517253]\n\tOrdinal0 [0x003AFD34+64820]\n\tOrdinal0 [0x003AC61E+50718]\n\tOrdinal0 [0x003CB797+178071]\n\tOrdinal0 [0x003CB59D+177565]\n\tOrdinal0 [0x003C95FB+169467]\n\tOrdinal0 [0x003B160A+71178]\n\tOrdinal0 [0x003B2690+75408]\n\tOrdinal0 [0x003B2629+75305]\n\tOrdinal0 [0x004B71B7+1143223]\n\tGetHandleVerifier [0x005B2B46+507814]\n\tGetHandleVerifier [0x005B2864+507076]\n\tGetHandleVerifier [0x005B9F47+537511]\n\tGetHandleVerifier [0x005B3402+510050]\n\tOrdinal0 [0x004AF29C+1110684]\n\tOrdinal0 [0x004B938B+1151883]\n\tOrdinal0 [0x004B94F3+1152243]\n\tOrdinal0 [0x004B83F5+1147893]\n\tBaseThreadInitThunk [0x76896359+25]\n\tRtlGetAppContainerNamedObjectPath [0x77C17C24+228]\n\tRtlGetAppContainerNamedObjectPath [0x77C17BF4+180]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.syntax.bases.BaseClass.setUp(BaseClass.java:30)\r\n\tat com.syntax.steps.Hooks.start(Hooks.java:13)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:42)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:49)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:123)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:147)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:377)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:138)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.run(ForkedBooter.java:465)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:451)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I am logged into HRMS as an Admin",
  "keyword": "Given "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_am_logged_into_HRMS_as_an_Admin()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I navigated to Add Employe Page",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_navigated_to_Add_Employe_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I add \"A\", \"Jr\"  and \"A\"",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_add_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on Save",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_click_on_Save()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I pick Employee Id",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_pick_Employee_Id()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I navigated Employee List",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_navigated_Employee_List()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter valid Employee Id",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_enter_valid_Employee_Id()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click search button",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on Employee from table",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.click_on_Employee_from_table()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click Qualifications link",
  "keyword": "And "
});
formatter.match({
  "location": "QualificationSteps.i_click_Qualifications_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on Work Experience add button",
  "keyword": "When "
});
formatter.match({
  "location": "QualificationSteps.i_click_on_Work_Experience_add_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I am able to add Work Experience",
  "rows": [
    {
      "cells": [
        "Company",
        "JobTitle",
        "From",
        "To",
        "Comment"
      ]
    },
    {
      "cells": [
        "Amazon",
        "QA Tester",
        "2015-06-02",
        "2017-09-17",
        "Two years experience"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "QualificationSteps.i_am_able_to_add_Work_Experience(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on work experience save button",
  "keyword": "And "
});
formatter.match({
  "location": "QualificationSteps.i_click_on_work_experience_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on Skills add button",
  "keyword": "And "
});
formatter.match({
  "location": "QualificationSteps.i_click_on_Skills_add_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I am able to add Skill",
  "rows": [
    {
      "cells": [
        "Skill",
        "YearOfExpr",
        "Comment"
      ]
    },
    {
      "cells": [
        "DataBase",
        "3",
        "Three years experience"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "QualificationSteps.i_am_able_to_add_Skill(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on skill save button",
  "keyword": "And "
});
formatter.match({
  "location": "QualificationSteps.i_click_on_skill_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on Languages add button",
  "keyword": "And "
});
formatter.match({
  "location": "QualificationSteps.i_click_on_Languages_add_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I am able to add Language",
  "rows": [
    {
      "cells": [
        "Language",
        "Fluency",
        "Competency",
        "Comment"
      ]
    },
    {
      "cells": [
        "Kazakh",
        "Speaking",
        "Mother Tongue",
        "He knows two languages"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "QualificationSteps.i_am_able_to_add_Language(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on language save button",
  "keyword": "And "
});
formatter.match({
  "location": "QualificationSteps.i_click_on_language_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on Education add button",
  "keyword": "And "
});
formatter.match({
  "location": "QualificationSteps.i_click_on_Education_add_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I am able to add Education",
  "rows": [
    {
      "cells": [
        "Level",
        "Institute",
        "Major",
        "Year",
        "GPA/Score",
        "StartDate",
        "EndDate"
      ]
    },
    {
      "cells": [
        "MBA",
        "GA Tech",
        "Data Science",
        "2018",
        "4.7",
        "2017-06-02",
        "2018-09-17"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "QualificationSteps.i_am_able_to_add_Education(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on Education save button",
  "keyword": "And "
});
formatter.match({
  "location": "QualificationSteps.i_click_on_Education_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat com.syntax.utils.CommonMethods.takeScreenshot(CommonMethods.java:104)\r\n\tat com.syntax.steps.Hooks.end(Hooks.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:50)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:49)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:123)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:147)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:377)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:138)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.run(ForkedBooter.java:465)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:451)\r\n",
  "status": "failed"
});
formatter.uri("file:src/test/resources/Features/SalaryCompoAdd.feature");
formatter.feature({
  "name": "Enter Salary Components",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@sprint2"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 79\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-ODFPRUL\u0027, ip: \u0027192.168.0.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x0051A113+1548563]\n\tOrdinal0 [0x0049DDA1+1039777]\n\tOrdinal0 [0x0041E485+517253]\n\tOrdinal0 [0x003AFD34+64820]\n\tOrdinal0 [0x003AC61E+50718]\n\tOrdinal0 [0x003CB797+178071]\n\tOrdinal0 [0x003CB59D+177565]\n\tOrdinal0 [0x003C95FB+169467]\n\tOrdinal0 [0x003B160A+71178]\n\tOrdinal0 [0x003B2690+75408]\n\tOrdinal0 [0x003B2629+75305]\n\tOrdinal0 [0x004B71B7+1143223]\n\tGetHandleVerifier [0x005B2B46+507814]\n\tGetHandleVerifier [0x005B2864+507076]\n\tGetHandleVerifier [0x005B9F47+537511]\n\tGetHandleVerifier [0x005B3402+510050]\n\tOrdinal0 [0x004AF29C+1110684]\n\tOrdinal0 [0x004B938B+1151883]\n\tOrdinal0 [0x004B94F3+1152243]\n\tOrdinal0 [0x004B83F5+1147893]\n\tBaseThreadInitThunk [0x76896359+25]\n\tRtlGetAppContainerNamedObjectPath [0x77C17C24+228]\n\tRtlGetAppContainerNamedObjectPath [0x77C17BF4+180]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.syntax.bases.BaseClass.setUp(BaseClass.java:30)\r\n\tat com.syntax.steps.Hooks.start(Hooks.java:13)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:42)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:49)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:123)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:147)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:377)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:138)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.run(ForkedBooter.java:465)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:451)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I am logged into HRMS as an Admin",
  "keyword": "Given "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_am_logged_into_HRMS_as_an_Admin()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I navigated to Add Employe Page",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_navigated_to_Add_Employe_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I add \"Adem\", \"Jr\"  and \"Buyuk\"",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_add_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on Save",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_click_on_Save()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I pick Employee Id",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_pick_Employee_Id()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I navigated Employee List",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_navigated_Employee_List()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter valid Employee Id",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_enter_valid_Employee_Id()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click search button",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on Employee from table",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.click_on_Employee_from_table()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Add Employee Salary Details",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sprint2"
    },
    {
      "name": "@salary"
    }
  ]
});
formatter.step({
  "name": "I click on Salary link",
  "keyword": "And "
});
formatter.match({
  "location": "SalarySteps.i_click_on_Salary_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on  Salary Add",
  "keyword": "When "
});
formatter.match({
  "location": "SalarySteps.i_click_on_Salary_Add()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I am able to add Employee Salary Details",
  "rows": [
    {
      "cells": [
        "PayGrade",
        "SalaryComponents",
        "PayFrequency",
        "Currency",
        "Amount",
        "Comments"
      ]
    },
    {
      "cells": [
        "batuhan sutceker",
        "bonus",
        "Monthly",
        "United States Dollar",
        "9000",
        "cash"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SalarySteps.i_am_able_to_add_Employee_Salary_Details(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on Add Direct Deposit Details checkbox",
  "keyword": "When "
});
formatter.match({
  "location": "SalarySteps.i_click_on_Add_Direct_Deposit_Details_checkbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I am able to add Deposit Account Details",
  "rows": [
    {
      "cells": [
        "AccountNumber",
        "AccountType",
        "RoutingNumber",
        "Amount"
      ]
    },
    {
      "cells": [
        "12345",
        "Checking",
        "101112",
        "11000"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SalarySteps.i_am_able_to_add_Deposit_Account_Details(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on Salary Save button",
  "keyword": "And "
});
formatter.match({
  "location": "SalarySteps.i_click_on_Salary_Save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat com.syntax.utils.CommonMethods.takeScreenshot(CommonMethods.java:104)\r\n\tat com.syntax.steps.Hooks.end(Hooks.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:50)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:49)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:123)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:147)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:377)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:138)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.run(ForkedBooter.java:465)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:451)\r\n",
  "status": "failed"
});
formatter.uri("file:src/test/resources/Features/personal.feature");
formatter.feature({
  "name": "Edit Personal Details",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@sprint2"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 79\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-ODFPRUL\u0027, ip: \u0027192.168.0.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x0051A113+1548563]\n\tOrdinal0 [0x0049DDA1+1039777]\n\tOrdinal0 [0x0041E485+517253]\n\tOrdinal0 [0x003AFD34+64820]\n\tOrdinal0 [0x003AC61E+50718]\n\tOrdinal0 [0x003CB797+178071]\n\tOrdinal0 [0x003CB59D+177565]\n\tOrdinal0 [0x003C95FB+169467]\n\tOrdinal0 [0x003B160A+71178]\n\tOrdinal0 [0x003B2690+75408]\n\tOrdinal0 [0x003B2629+75305]\n\tOrdinal0 [0x004B71B7+1143223]\n\tGetHandleVerifier [0x005B2B46+507814]\n\tGetHandleVerifier [0x005B2864+507076]\n\tGetHandleVerifier [0x005B9F47+537511]\n\tGetHandleVerifier [0x005B3402+510050]\n\tOrdinal0 [0x004AF29C+1110684]\n\tOrdinal0 [0x004B938B+1151883]\n\tOrdinal0 [0x004B94F3+1152243]\n\tOrdinal0 [0x004B83F5+1147893]\n\tBaseThreadInitThunk [0x76896359+25]\n\tRtlGetAppContainerNamedObjectPath [0x77C17C24+228]\n\tRtlGetAppContainerNamedObjectPath [0x77C17BF4+180]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.syntax.bases.BaseClass.setUp(BaseClass.java:30)\r\n\tat com.syntax.steps.Hooks.start(Hooks.java:13)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:42)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:49)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:123)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:147)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:377)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:138)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.run(ForkedBooter.java:465)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:451)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I am logged into HRMS as an Admin",
  "keyword": "Given "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_am_logged_into_HRMS_as_an_Admin()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I navigated to Add Employe Page",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_navigated_to_Add_Employe_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I add \"A\", \"Jr\"  and \"A\"",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_add_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on Save",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_click_on_Save()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I pick Employee Id",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_pick_Employee_Id()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I navigated Employee List",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_navigated_Employee_List()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter valid Employee Id",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_enter_valid_Employee_Id()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click search button",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on Employee from table",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.click_on_Employee_from_table()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Add Employee Job Details",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sprint2"
    },
    {
      "name": "@job"
    }
  ]
});
formatter.step({
  "name": "I click on job link",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_click_on_job_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on  Edit",
  "keyword": "When "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_click_on_Edit()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I am able to add Employee Job Details",
  "rows": [
    {
      "cells": [
        "JobTitle",
        "EmploymentStatus",
        "JobCategory",
        "JoinedDate",
        "SubUnit",
        "Location",
        "StartDate",
        "EndDate",
        "ContractDetails"
      ]
    },
    {
      "cells": [
        "IT Analyst",
        "Employee",
        "Professionals",
        "2017-05-30",
        "Select",
        "Select",
        "2018-01-09",
        "2019-01-02",
        "C:/Users/salamon/Desktop/1.jpg"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobAndEmergencySteps.then_I_am_able_to_add_Employee_Job_Details(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on save",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_click_on_save()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat com.syntax.utils.CommonMethods.takeScreenshot(CommonMethods.java:104)\r\n\tat com.syntax.steps.Hooks.end(Hooks.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:50)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:49)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:123)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:147)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:377)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:138)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.run(ForkedBooter.java:465)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:451)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 79\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-ODFPRUL\u0027, ip: \u0027192.168.0.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x0051A113+1548563]\n\tOrdinal0 [0x0049DDA1+1039777]\n\tOrdinal0 [0x0041E485+517253]\n\tOrdinal0 [0x003AFD34+64820]\n\tOrdinal0 [0x003AC61E+50718]\n\tOrdinal0 [0x003CB797+178071]\n\tOrdinal0 [0x003CB59D+177565]\n\tOrdinal0 [0x003C95FB+169467]\n\tOrdinal0 [0x003B160A+71178]\n\tOrdinal0 [0x003B2690+75408]\n\tOrdinal0 [0x003B2629+75305]\n\tOrdinal0 [0x004B71B7+1143223]\n\tGetHandleVerifier [0x005B2B46+507814]\n\tGetHandleVerifier [0x005B2864+507076]\n\tGetHandleVerifier [0x005B9F47+537511]\n\tGetHandleVerifier [0x005B3402+510050]\n\tOrdinal0 [0x004AF29C+1110684]\n\tOrdinal0 [0x004B938B+1151883]\n\tOrdinal0 [0x004B94F3+1152243]\n\tOrdinal0 [0x004B83F5+1147893]\n\tBaseThreadInitThunk [0x76896359+25]\n\tRtlGetAppContainerNamedObjectPath [0x77C17C24+228]\n\tRtlGetAppContainerNamedObjectPath [0x77C17BF4+180]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.syntax.bases.BaseClass.setUp(BaseClass.java:30)\r\n\tat com.syntax.steps.Hooks.start(Hooks.java:13)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:42)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:49)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:123)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:147)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:377)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:138)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.run(ForkedBooter.java:465)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:451)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I am logged into HRMS as an Admin",
  "keyword": "Given "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_am_logged_into_HRMS_as_an_Admin()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I navigated to Add Employe Page",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_navigated_to_Add_Employe_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I add \"A\", \"Jr\"  and \"A\"",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_add_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on Save",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_click_on_Save()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I pick Employee Id",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_pick_Employee_Id()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I navigated Employee List",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_navigated_Employee_List()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter valid Employee Id",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_enter_valid_Employee_Id()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click search button",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on Employee from table",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.click_on_Employee_from_table()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Add Employee Emergency Contact",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sprint2"
    },
    {
      "name": "@emergency"
    }
  ]
});
formatter.step({
  "name": "I navigated Emergency Contacts",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_click_on_Emergency_Contacts()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on  Add",
  "keyword": "When "
});
formatter.match({
  "location": "JobAndEmergencySteps.i_click_on_Add()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I am able to add Employee Emergency Contacts",
  "rows": [
    {
      "cells": [
        "Name",
        "RelationsShip",
        "HomeTelephone",
        "Mobile",
        "WorkTelephone"
      ]
    },
    {
      "cells": [
        "Mesiah",
        "Saver",
        "4045555555",
        "5555555555",
        "6665555555"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobAndEmergencySteps.I_am_able_to_add_Employee_Emergency_Contacts(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on emergency contact save button",
  "keyword": "And "
});
formatter.match({
  "location": "JobAndEmergencySteps.IClickSaveBtn()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat com.syntax.utils.CommonMethods.takeScreenshot(CommonMethods.java:104)\r\n\tat com.syntax.steps.Hooks.end(Hooks.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:50)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:49)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:123)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:147)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:377)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:138)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.run(ForkedBooter.java:465)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:451)\r\n",
  "status": "failed"
});
});