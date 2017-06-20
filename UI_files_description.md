# Documents for UI:

## HTML
  * login.html – login page.
  * register.html – register page.
  * projectSample.html – projects main page with ajax call to pull up list of projects and function call to refresh the iframe containing project details (project.html) with the details of the selected project (txn = 3)
  * project.html – iframe for project details; ajax call for project details (txn = 4) ad call for the member list iframe (member.html)
  * member.html – members details; ajax call for member details (txn = 6)
  * tasks.html – tasks page can be changes to requirements page.
  * tasks_pro.html – if converted to requirements page this will be pulled up when calling into the project details iframe (doesn’t have page header as there is in tasks.html)
  * tasks_kanban.html – main tasks page; Kanban board
  * tasks_kanban_pro.html – tasks Kanban board without the page header can be pulled to iframes if needed. (currently used in go to tasks button)
  * issue_tracker.html – main issues page.
  * issues_pro.html – issues list without the page header can be pulled to iframes if needed. (currently used in go to issues button)

## JS
  * login.js – ajax call for login check (txn = 1)
  * register.js – ajax call for registration (txn = 2)
  * project.js – ajax call for adding new project (txn = 6)
