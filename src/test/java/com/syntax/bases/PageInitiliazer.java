package com.syntax.bases;

import com.syntax.pages.AddDependentsPageWebElements;
import com.syntax.pages.AddEmployeePageElements;
import com.syntax.pages.ContactPageElements;
import com.syntax.pages.DashboardPageElements;
import com.syntax.pages.EmergencyContactPageElements;
import com.syntax.pages.EmployeListPageElements;
import com.syntax.pages.JobDetailspageElements;
import com.syntax.pages.LoginPageElements;
import com.syntax.pages.PersonalDetailsPageElements;
import com.syntax.pages.QualificationsPageElements;
import com.syntax.pages.SalaryCompoPageElement;

public class PageInitiliazer extends BaseClass {
	protected static DashboardPageElements dash;
	protected static LoginPageElements login;
	protected static AddEmployeePageElements addEmp;
	protected static EmployeListPageElements employeeList;
	protected static PersonalDetailsPageElements person;
	protected static JobDetailspageElements job;
	protected static EmergencyContactPageElements emergency;
	protected static QualificationsPageElements qualifications;
	protected static SalaryCompoPageElement salary;
	protected static ContactPageElements contact;
	protected static AddDependentsPageWebElements addDep;

	public static void initializeAllPage() {

		login = new LoginPageElements();
		dash = new DashboardPageElements();
		addEmp=new AddEmployeePageElements();
		employeeList=new EmployeListPageElements();
		person=new PersonalDetailsPageElements();
		job = new JobDetailspageElements();
		emergency = new EmergencyContactPageElements();
		qualifications=new QualificationsPageElements();
		salary=new SalaryCompoPageElement();
		contact=new ContactPageElements();
		addDep=new AddDependentsPageWebElements();

	}

}
