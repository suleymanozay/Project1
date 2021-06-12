package com.syntax.utils;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import com.syntax.bases.PageInitiliazer;

public class CommonMethods extends PageInitiliazer{
	
	/**
	 * This method when click on the element use JavascriptExecutor
	 * @param element
	 */
	public static void jsClick(WebElement element) {
		JavascriptExecutor js=(JavascriptExecutor)driver;
		js.executeScript("arguments[0].click;", element);
		
	}
	
	/**
	 * This method send text to target element
	 * @param element
	 * @param value
	 */
	public static void sendText(WebElement element,String value) {
		element.clear();
		element.sendKeys(value);
	}
	
	/**
	 * This method will wait until element becomes clickable
	 * @param element
	 */
	public static void waitForClickability(WebElement element) {
		WebDriverWait wait=new WebDriverWait(driver, Constants.EXPLICIT_LOAD_TIME);
		wait.until(ExpectedConditions.elementToBeClickable(element)); 
	}
	
	/**
	 * This method will click on the element
	 * @param element
	 */
	public static void click(WebElement element) {
		element.click();
	}
	
	/**
	 * This method will select value from Drop Down
	 * @param element
	 * @param visibleText
	 */
	public static void selectDdValue(WebElement element, String visibleText) {
		Select select = new Select(element);
		List<WebElement>options=select.getOptions();
		boolean isFound=false;
		for (WebElement option : options) {
			if(option.getText().equals(visibleText)) {
				select.selectByVisibleText(visibleText);
				isFound=true;
				break;
			}
			
		}
		if(!isFound) {
			System.out.println("Value "+visibleText+" was not foud in the dropdown");
		}
	}
	
	/**
	 * This method will click on the radio based on the text
	 * @param elements
	 * @param radioText
	 */
	public static void clickRadio(List<WebElement> elements, String radioText) {
		for (WebElement el : elements) {
			if(el.getText().equals(radioText)) {
				el.click();
				break;
			}
			
		}
	}
	
	/**
	 * This method will take a screenshot
	 * @param fileName
	 */
	public static byte[] takeScreenshot(String fileName) {
		Date date=new Date();
		SimpleDateFormat sdf=new SimpleDateFormat("yyyy_MMdd_hhmmss");
		String timeStamp=sdf.format(date.getTime());
		
		TakesScreenshot ts=(TakesScreenshot)driver;
		byte [] picture = ts.getScreenshotAs(OutputType.BYTES);
		File file=ts.getScreenshotAs(OutputType.FILE);
		String scrshotFile=Constants.SCREENSHOTS_FILEPATH+fileName+timeStamp+".png";
		try {
			FileUtils.copyFile(file, new File(scrshotFile));
		} catch (IOException e) {
			System.out.println("Cannot take a screenshot");
		}
		return picture;
	}
}
