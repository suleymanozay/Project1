package com.syntax.runners;


import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/Features/" ,
		glue ="com/syntax/steps" ,
		dryRun = false ,
		plugin = {"pretty", "html:target/html/cucumber-default-report","json:target/cucumber.json","rerun:target/failed.txt"  },
		monochrome = true,

  	tags = {"@sprint2"}		

		
			
		)

public class Runner {
	

}
