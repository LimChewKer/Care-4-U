function main(Date, Employee_ID, Question1 ,Question2, Question3, Question4, Question5) {
  // ID of the Google Sheet where responses are stored
  const sheet_ID = '1rtd-mb25_XFdZpJwIet6xgV4lgBJxnFbt6Jk3_M_z24'; // Replace with your actual sheet ID
  
  // Open the Google Sheet
  const ss = SpreadsheetApp.openById(sheet_ID);
  const sheet = ss.getSheetByName("Mental Health Questionnaire"); // Adjust sheet name if different
  
  // Get the last row of responses
  const START_COLUMN = 1
  const START_ROW = 1
  
  // Construct the email body
  const body = "Your Result: " + "<br><br>" +
               "Date :" + Date + "<br><br>" +
               "Employee_ID: " + Employee_ID + "<br><br>" +
               "Question 1: " + Question1 + "<br><br>" +
               "Question 2: " + Question2 + "<br><br>" +
               "Question 3: " + Question3 + "<br><br>" +
               "Question 4: " + Question4 + "<br><br>" +
               "Question 5: " + Question5 + "<br><br>";
  
  // Recipient email address
  const target_email = Session.getActiveUser().getEmail(); // Replace with your actual email if needed
  
  // Email subject
  const email_Subject = 'New Mental Health Questionnaire Response';
  
  // Send the email
  MailApp.sendEmail(target_email, email_Subject, "", {htmlBody: body});
}