This website was used for the Illini Mentor Program from 2022 - 2025. To revive it, feel free to fork this repo and make a few modifications to update it!

Relevant pages that would need to be potentially be updated each semester include:
- src/Screens/HowToJoin/HowToJoin.js (update when applications are released)
- src/Screens/Exec.js (if the number of exec members change)
- src/Components/ImageGroup/Images/Exec (to update exec members images)
- src/Components/ExecCard/ExecMembers.js (to update exec members info)

After updating the relevant pages, to save the updates in cpanel, do the following:
1. run the command: ```npm run build```
2. compress the build folder that is created
3. In cpanel, navigate to "File Manager" and locate the public_html folder.
4. Copy ```build.zip``` into the public_html folder. 
5. Extract the build folder and ensure all files are located in the public_html directory.