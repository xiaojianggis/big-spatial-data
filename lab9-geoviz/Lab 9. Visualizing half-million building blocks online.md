## Lab 9. Visualizing half-million building blocks online

This week we are going to talk about using Github and publish your webpage online. We have already created interactive choropleth map using localhost, but our webpage is not publicly accessible yet. After this week, we will be able to publish it through github and every other people can see your geoviz. You will be able to visualize half-million building blocks in Philadelphia through Mapbox and host your webpage on Github

## 1. Prepare the data
### 1.1 Download the dataset
You need the building footprint and the land use map in Philadelphia. You can download the `Philadelphia Buildings` and `Philadelphia Planning - Land Use` from the [PASDA website]([https://www.pasda.psu.edu/). A simple way to access the data is to download these data in you AWS terminal using `wget`. First find your dataset in the website, and then right click the link and copy the link address, then use wget to download it. For example, I can `ssh` to my AWS EC2, then type in,
`wget ftp://ftp.pasda.psu.edu/pub/pasda/philacity/data/PhiladelphiaBuildings2017.zip`

You can then download the land use map in a similar way. You can check if you have file downloaded, using `ls` in your terminal. If you can see the zip file, then you can unzip these two shapefiles,
`unzip PhiladelphiaBuildings2017.zip`
`unzip PhillyPlanning_Land_Use.zip`


### 1.2 Convert the land use map into geojson file
In this lab, we are going to use Mapbox to visualize the building block shapefile. However, on web-based GIS system, shapefile is not a well-supported format. Therefore, we need to convert the shapefile into other format for visualization. The first step to do the conversion is to convert shapefile into geojson file, we nee to install gdal command in our EC2, 

`sudo apt install gdal-bin`
`sudo add-apt-repository ppa:ubuntugis/ppa
`

For more details about installing the gdal command check this [link] (https://mothergeo-py.readthedocs.io/en/latest/development/how-to/gdal-ubuntu-pkg.html).


When you install the command tool successfully, you can then use this command to convert your 	`PhiladelphiaBuildings2017.shp` to a geojsonfile. 

`ogr2ogr -f GeoJSON -t_srs crs:84 buildings_ft.geojson PhiladelphiaBuildings2017.shp`


### 1.3 Convert the geojson file into mbtile file
We are going to use mapbox to visualize the building blocks in Philadelphia. Mapbox has developed an efficient format to using tiling system to visualize big spatial data. So, we are going to convert the geojson file into mbtiles. Here, you need to tool of `tippecanoe `

`sudo apt-get install build-essential libsqlite3-dev zlib1g-dev`

`git clone https://github.com/mapbox/tippecanoe.git`

`cd tippecanoe`

`make`

`sudo make install`

For more instructions about this, check this [link](https://gist.github.com/ryanbaumann/e5c7d76f6eeb8598e66c5785b677726e)


tippecanoe -ac -an -l buildings -A “© Building land use types by Xiaojiang Li” -o buildings.mbtiles buildings_ft.geojson



## 2. Visualize in Mapbox
Follow the instruction on My Medium [blog](https://gis-jiang.medium.com/map-choropleth-map-of-half-million-building-footprints-using-mapbox-99b378a14226). You need first to upload created mbtile file to Mapbox studio. Then write some JavaScript code to create your web-based map. This is not Geovisualization class, I am not going to show you too much about how to use JS for create web-based map, please just follow the blog and create your web page.  



## 3. Github and Git
GitHub is website that provides hosting for software development version control using Git. Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency. GitHub is not only a code sharing and social networking site for developers. It is also a web hosting site.  Below I have outlined how to host spatial data and a web application from GitHub.  This workflow is perfect for small applications. 

### Github pages
For this exercise, we will use Github to create a simple webpage repository. In this repository, we have the HTML, CSS, and JS required for our webpage. A feature of Github is the ability to create a homepage using something called Github pages.

To use Github pages to host a static page, you have to name your repository very specifically.The following steps detail creating a repository and setting up the initial settings.

Working with Github is easy, there are two main ways you can work with Github, via command line, or with a desktop GUI. The instructions below will show you how to get started on the command line.

### 1. Sign up a Github account
Sign up for a Github account on the Github site in which you can host projects and maintain repositories. ([Link](https://github.com/join?source=header-home))


### 2. Install Git and check if Git is installed on your Machine
Moving back to our local machine, we need to get git and Github setup so we can work with it.

**If you are using Mac**: Using Terminal, we are going to check for Git, and if it is not found, we will download and install necessary files.

**If you are using Windows**: Git does not work easily from the Windows command prompt. To easily use command line to interact with Github, you need to install Git bash for desktop where you can use Git Bash. This is a command line interface that allows you to run commands to create repositories, rectify file differences, and push commits.

[Download Github Bash](https://gitforwindows.org/)

Once downloaded, proceed below, but instead of using Terminal, you use Git Bash.

#### i. Open Terminal/Git Bash
#### ii. Check git installation by entering the following command
`git –-version`
if you have Git installed, you will see the version. If you get an error, or you don’t see the version, you need to install Git. Install Git from the downloads page on the main Git project homepage.

https://git-scm.com/

Download Git for your machine. A wizard will lead you through the installation. You can select the defaults for installation. You might need to restart your machine after installation to get it to take effect.


**For Mac**, type in `git --version` in your terminal and see if your get the git installed
**For Windows**, open your `Git` bash, and type in `git --version`. 

If we have the github account registered and `git` bash configured successfully, let get started and publish our geoviz online. 

**All the folowing commands will be run in Git Bash, NOT Anaconda**


### 3. Create a repository
i. Click on the Repositories tab on your main profile page.
On your Github profile page, click on the Repositories tab.

ii. In the upper right corner, select ‘New’.
Create a new repository, let's say you repo is call `bloodlead`. You can use other names as you like.

iii. In the Create a new repository window, set up your repository.
You name your repository as "geoviz" or other names you like. Give the repository a description, make it public. **Don't initialize it with a README.**

iv. Click Create.
You now have an empty repository set up in which you can add files and set up a project.

i. Click on the Repositories tab on your main profile page.
On your Github profile page, click on the Repositories tab.



### 4. Synchronize with your github repository
In you terminal, navigate to the directory that is storing your javascript files by using the `cd` command, my folder is called `geoviz`, you need to to use your folder name.
```
cd geoviz
```
Then initiate your folder as a github repository, 
```
git init
```
**MAKE SURE** your html file is named as `index.html`, or you will not be able to see your webpage.


Alright, let start to Synchronize our local folder with Github repository, 
```
git remote add origin https://github.com/xiaojianggis/bloodlead.git
```
You need to replace the last paramter by the link of your repository name. You can find these when your first created the github repository. This command will link your directory on your local machine with the GitHub repository.  You will see this command on GitHub under how to push an existing repository from the command line.

**Note**: if you get error of "fatal: remote origin already exists." Type the following statement to solve it,
```
git remote -v
git remote rm origin
git remote add origin https://github.com/xiaojianggis/bloodlead.git

```

### 5. Check out with a branch
Now you need to create a branch called gh-pages from GitHub and switch to this branch. Type in,
```
git checkout -b gh-pages
```
This command with switch to the gh-pages branch in the repository.

### 6. Add and commit your files to your repository
Now just commit everything in the folder to your repository by typing in 
```
git add .
git commit -m 'my initial commit, just a memo'
```

### 7. Finally push your project up to the branch gh-pages by typing in  
```
git push origin gh-pages 
```

### 8. Now your project is up on GitHub.  
In a web browser log into your GitHub account and view the project in the gh-pages branch.  You can also view the web site using your http://<GitHub handle>.github.io/repository name.  My final website can be viewed at https://xiaojianggis.github.io/bloodlead/

Make sure you replace the `xiaojianggis` by your own user name, and `bloodlead` by your own repository name. 



## Reference:
MIT DUSP Geoviz, https://github.com/civic-data-design-lab/16_11.S947/blob/master/week1/Part1_IntroGitAndGithub.ipynb
Web hosting on Github, https://gis.ucar.edu/github-web-hosting


