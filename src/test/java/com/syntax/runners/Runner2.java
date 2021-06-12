package com.syntax.runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="src/test/resources/Features/"
		,glue="com/syntax/steps"
		,dryRun=false
		,plugin= {"pretty","html:target/html/cucumber-default-report","json:target/cucumber.json"}
		,monochrome=true
		,tags= {"@Sprint1"}
		
		)


public class Runner2 {

}
