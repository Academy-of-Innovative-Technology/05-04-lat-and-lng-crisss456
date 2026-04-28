[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=23753295&assignment_repo_type=AssignmentRepo)
# 🗺️ Mapbox: FlyTo

## 📌 Objective
Recreate the demo and implement map navigation using longitude and latitude inputs.

## 🔗 Demo Reference
https://output.jsbin.com/vijuzim



## 📝 Instructions

### 1. Capture Input Values
- Retrieve the values from:
  - Longitude input box
  - Latitude input box

---

### 2. Add Conditional Logic
- Inside your conditional statement:
  - Ensure the inputs are valid before proceeding

---

### 3. Create Mapbox Coordinates Object
- Create a new `Mapbox LngLat` object (refer to slide 3):


---

### 4. Update `map.flyTo()`
  - Pass the `coordinates` variable as the value for the `center` key
  - Set the zoom level to **15**


---

### 5. Test Your Code
- Use the coordinates provided on **slide 5**
- Confirm that:
  - The map moves to the correct location
  - The zoom level updates properly

---

## ✅ Expected Outcome
- The map should smoothly move (`flyTo`) to the entered coordinates
- The zoom level should be set to **15**
- Inputs should dynamically control the map location