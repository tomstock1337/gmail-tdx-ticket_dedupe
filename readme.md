# Gmail TDX Ticket Dedupe
This project looks for TeamDynamix ticket numbers in your inbox.  The script will then archive all but the most recent ticket email from your inbox.

This project can be adapted for other ticketing systems by changing the regular expression in the `code.gs` file based on the ticket Subject line in the emails and the From address.

# Installation
1. Navigate to https://script.google.com/
2. Ensure that you are logged in under your Google for Work account.
3. Click **New Project**
4. Set title to *TDX Ticket Dedupe*
5. Copy the contents from `code.gs` in this repository and paste the contents in the Apps Script project.
6. Click **Save**
7. Click **Run**
8. Authorize the permissions for the script by relogging in with your Google for Work account.
9. Click **Allow**
10. On the left navigation, select **Triggers**, the icon looks like a clock
11. On the bottom right, click **Add Trigger**
12. Set the following settings

    - Choose which function to run: **ticketDeDupe**
    - Choose which deployment should run: **Head**
    - Select event source: **Time-driven**
    - Select type of time based trigger: **Minutes timer**
    - Select hour interval: **Every minute**
13. Click **Save**
14. If prompted, authorize the permissions for the script by relogging in with your Google for Work account.