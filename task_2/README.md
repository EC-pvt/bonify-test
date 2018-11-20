# Frontend Team Lead Challenge

## Question 2

#### Normalize applicationData dataset

Normalization occurs in `normalize` recursive function; all the keys are parsed to get their `value`, if it is a primitive `NOT Array` the key:value pair is added to the result dataset, otherwise I map the value and recursively call `normalize` on each object inside `value`.