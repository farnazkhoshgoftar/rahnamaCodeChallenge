1)npm install
2)npx json-server --watch db.json

<!-- توضیحات تکمیلی -->

I used
json-server as a fake api,Redux for state management,react-toastify to display notifications,axios for HTTP request,localStorage for save data on browser
and you can see all the installed packages in package.json

In the src folder , we have a folder to each feature that contains a component(Folder by feature)
In this project you can share post and like or comment on other people's posts
You can not upload photo or video.I tried but I think json-server does not support it, but in the Add component you can see code of upload image.