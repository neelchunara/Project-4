![image](https://github.com/neelchunara/Project-4/assets/126720049/ac2b1df7-ff8d-491e-bce0-0de979ca08dc)


# Project-4 - Car Crash Calculator

## Team
- [Sean Allen](https://github.com/seanard1)
- [Dylan Kelly](https://github.com/DylanMKelly)
- [Ruby Landry](https://github.com/rubymaelandry)
- [Neel Chunara](https://github.com/neelchunara)


## DataSet
- [Motor Vehicle Collisions Involving Killed or Seriously Injured Persons](https://open.toronto.ca/dataset/motor-vehicle-collisions-involving-killed-or-seriously-injured-persons/)
  

## Description
We intend to utilize Motor Vehicle Collisions KSI (Killed or Seriously Injured) data from https://www.toronto.ca/ to forecast the likelihood of a fatal outcome in an accident based on specific input variables, including visibility, road condition, impact type, speeding (yes/no), aggressive driving (yes/no), alcohol involvement (yes/no), running a red light (yes/no), being over the age of 70 (yes/no), and being a new driver (age 15 to 19).

This data analysis has the potential to contribute to accident prevention efforts by promoting safer driving behaviors in specific areas. As a web dashboard it is more of a novelty to check the risks of certain conditions for a collision. But the model has potential for various industries, from municipal risk assessment, to insurance, to AI navigation. 


### Tools Used
* Python and Jupyter Notebook
* SQL and SQLite
* Libraries: Pandas, Numpy, Sklearn, Keras Tuner, TensorFlow, XGBoost
* Flask
* HTML/CSS
* Javascript
* Bootstrap
* D3.js


### Machine Learning Model
* Neural Network



## Dashboard
![image](https://github.com/neelchunara/Project-4/assets/126720049/47735393-9dfb-4f35-9bfc-40e1efadc7db)


## Summary

This repository represents the construction of a machine-learning model for motor-vehicle collision data for the City of Toronto and the deployment of that model through Flask to an online dashboard. 

We used a CSV, stored in a SQL database, to build a model through iterations of using XGBoost to cull the features and Keras Tuner to confirm functionality. 

The end result is an MLM that can predict whether a crash was likely to be fatal or non-fatal with 86% accuracy by using only nine features of the original 30. 

We then constructed a Flask application that loads the model and can return a prediction when its API is called with a 20-string array representing the input features for the model.

The ability to do that was then built into a web dashboard that allows users to change the input variables and test the risk of a fatality for a collision under the circumstances that are selected. 

## Citations

[Popper used for positioning on dashboard](https://popper.js.org/)

[XGBoost recommended by Sunil for feature analysis](https://www.analyticsvidhya.com/blog/2018/09/an-end-to-end-guide-to-understand-the-math-behind-xgboost/)

[Additional resources on re-using trained model](https://www.tensorflow.org/tutorials/keras/save_and_load)