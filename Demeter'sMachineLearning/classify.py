
from keras.preprocessing.image import img_to_array
from keras.models import load_model
import numpy as np
import argparse
import imutils
import pickle
import cv2
import os
import socket



model_file = 'kitchen.model'
labler_file = 'mlb.pickle'
# load the image
image = cv2.imread("test/rice.jpg")
output = imutils.resize(image, width=400)


image = cv2.resize(image, (96, 96))
image = image.astype("float") / 255.0
image = img_to_array(image)
image = np.expand_dims(image, axis=0)


print("[INFO] loading network...")
model = load_model(model_file)
mlb = pickle.loads(open(labler_file, "rb").read())


print("[INFO] classifying image...")
proba = model.predict(image)[0]
idxs = np.argsort(proba)[::-1][:2]

# loop over the indexes of the high confidence class labels
for (i, j) in enumerate(idxs):
	# build the label and draw the label on the image
	label = "{}: {:.2f}%".format(mlb.classes_[j], proba[j] * 100)
	cv2.putText(output, label, (10, (i * 30) + 25),
		cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 255, 0), 2)


for (label, p) in zip(mlb.classes_, proba):
    '''
    if proba < 0.9 :
        print ("where did you train your model ? get a life")
        break
    elif proba > 0.9:
        continue
        '''

	#print("{}: {:.2f}%".format(label, p * 100))
    print("I am sure it is "+label+"by"+str(p)+"precent")

# show the output image
cv2.imshow("Output", output)
cv2.waitKey(0)
