const express = require('express');
const app = express();
const axios = require('axios')
const fs = require('fs');
app.use(express.json());

const jsonObject = {
    name: "",
    languages: {}
};

axios.get('https://api.github.com/orgs/creativecommons/repos').then((obj) => {
    const data = obj.data;
    for(const property in data){
        jsonObject.name=data[property].name
        axios.get(data[property].languages_url).then((obj) => {
            jsonObject.languages = obj.data
            const ans = JSON.stringify(jsonObject)
            fs.writeFile('./skills.json', ans,err => {
                if(err)
                console.log("Error writing the file", err)
                else
                console.log("Sucessfully wriiten the file")
            })
        })
    }

}
)
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));