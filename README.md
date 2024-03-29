# TRIPLE_upload_dev

## This is an early workflow for: 
1. Setting up and locally hosting Solid pod
2. Viewing your pod and uploading data into that pod


#### Requirements:
- [Node.js](https://nodejs.org/en/)
    -Version 18 or higher.

#### Setting up a local instance of a Solid pod:
1. Clone this git repo

   `git clone https://github.com/ecrum19/TRIPLE_App.git`

3. Navigate to the created directory

   `cd TRIPLE_App/`

5. Execute the following command:

   `npx @solid/community-server -p 3000 -c @css:config/file.json -f .data`

(If you would like to relaunch your pod at any point after initialization, you can then run the command `node localserver.js`)


#### Setting up the Solid pod
1. Using a web browser navigate to
    http://localhost:3000/

2. Click the link: "Sign up for an account"

3. Fill out the fields and click "Register"

4. On the "Your Account" page, click on "Create pod"

5. enter a name for the pod and click "Create pod"

6. Return to the home page by clicking "Back"

Voila, you now have a pod hosted by your local machine. Now, let us add something to it!

#### Connecting Pod to Penny (for data uploading)
1. First navigate to the [Penny](https://penny.vincenttunru.com/) tool

2. In the "Connect your Pod at:" box enter "http://localhost:3000" and click "Connect"

3. In the page that pops up click "Authorize"

4. Now, click on the Pod displayed on the resulting screen (the dark gray box)


#### Adding and viewing data (within Penny)
1. Click on "Upload file(s)"

2. Select local file to upload

3. The file should now be shown under "Contained resources" and is now stored in your pod!
