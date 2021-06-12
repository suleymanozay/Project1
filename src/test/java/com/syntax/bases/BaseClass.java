package com.syntax.bases;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import com.syntax.utils.ConfigsReader;
import com.syntax.utils.Constants;

public class BaseClass {
	
	public static WebDriver driver;
	public static String chromeDriverPath;
	public static String firefoxDriverPath;
	
	

			public static void setUp() {
				if(Constants.OS_NAME.contains("Win")) {
					chromeDriverPath=Constants.CHROME_DRIVER_PATH;
					firefoxDriverPath=Constants.GECKO_DRIVER_PATH;
				}else {
					chromeDriverPath=Constants.MAC_CHROME_DRIVER_PATH;
					firefoxDriverPath=Constants.MAC_GECKO_DRIVER_PATH;
				}
			ConfigsReader.readProperties(Constants.PROPERTIES_FILE_PATH);
			switch (ConfigsReader.getProperties("browser").toLowerCase()) {
			case "chrome":
				System.setProperty("webdriver.chrome.driver", chromeDriverPath);
				driver=new ChromeDriver();
				break;
			case "firefox":
				System.setProperty("webdriver.gecko.driver", firefoxDriverPath);
				driver=new FirefoxDriver();
				break;	

			default:
				System.err.println("Browser is not supported");
				break;
			}
		driver.manage().timeouts().pageLoadTimeout(Constants.PAGE_LOAD_TIME, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(Constants.IMPLICIT_LOAD_TIME, TimeUnit.SECONDS);
		driver.manage().window().maximize();
		driver.get(ConfigsReader.getProperties("url"));
	}
	
	public static void tearDown() {
		if(driver!=null) {
			driver.quit();
		}
	}

}
