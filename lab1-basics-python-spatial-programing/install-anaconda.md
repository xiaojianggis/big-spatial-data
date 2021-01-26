## Configure Python environment through Anaconda
Python is an increasingly popular high-level programming language. It emphasizes legibility over highly complex structure. Python innately provides simple data structures allowing for easy data manipulation. Python provides a simple approach to object-oriented programming, which in turn allows for intuitive programming, and has resulted in a large user community that has created numerous libraries that extend the basic capacities of the language.

The Anaconda makes configuring Python programing environment super easy. The Anaconda is cross-platform and it is very easy to install different libraries in the virtual environment. The following tutorial will walk you through the tutorial for installing Anaconda and required Python modules.

## 1. Install Anaconda
1. **Download the Anaconda**. Go to the [website](https://www.anaconda.com/products/individual) to download Anaconda for different OSs. <img src="images/download-anaconda.png" title="A cute kitten" height="300" /> 

Select the right Anaconda for your computer.>

2. **Locate you installer and install**. Locate you downloaded Anaconda installer and then double click it to install. For Windows and MacOS, the installing is the same, just keep following the instructions by default.

<img src="images/wind-install.png" title="A cute kitten" height="300" />

3. **Check your installation**. When you installation is done, you can then check if you have the Anaconda installed successfully. For Windows, press windows button and see if you have `Anaconda Prompt`. For Mac, go to your terminal and type in `conda`. 


## 2.Be familiar with Anaconda
When you have the Anaconda installed successfully, then you can open your Anaconda terminal (command line) and create virtual environment for Python programming. 

1. Open the Anaconda. For Windows, open the `Anaconda Prompt` 
<img src="images/win-terminal.png" title="A cute kitten" height="300" />. 

For Mac, go to the `terminal`, 

<img src="images/mac-terminal.png" title="A cute kitten" height="300" />

2. Type in `conda info -e` in your terminal, you should see the `base` environment. The `base` is the default Python environment. We usually don't install Python modules in the `base`. 
3. Create a customized virutal environment called `geospatial`, `conda create --name geospatial numpy shapely matplotlib rasterio fiona pandas ipython pyproj gdal jupyter geopandas`. Using this command, you can install most needed modules in this class. It is pretty straightforward to install the modules you need in Anaconda. In most cases just type in `conda install name_module`.


## 3. Start Jupyter Notebook and write Python code
Now we have the required environment ready. Let's start the `Jupyter Notebook` and then write your Python code. 

1. Go to your terminal. Make sure the `geospatial` is activated. **Note**: If you still see the `base`, you need to activate it first by typing `conda activate geospatial` in the terminal. If you want to go back to base, you can also deactivate it, `conda deactivate`. In this way, you can swich between different virtual environment, which can be created for different purposes. 

2. Start the Jupyter Notebook by typing `jupyter notebook` in the terminal. Then you web browser will start automatically and guide you to the notebook. You can then write Python code over there. 

## What Next
Go to open the test Jupyter Notebook file [link](Basics-python-spatial-data.ipynb). You can open the `ipynb` file directly or copy the statment to you newly created notebook. 

#### Reference
1. Jupyter notebook for beginners, https://realpython.com/jupyter-notebook-introduction/
2. Notebook Basics, https://jupyter-notebook.readthedocs.io/en/stable/examples/Notebook/Notebook%20Basics.html
