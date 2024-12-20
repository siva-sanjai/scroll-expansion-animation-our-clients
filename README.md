# Circle Scrolling Animation with Live Data

This project implements a responsive circle animation feature where circles expand outward from a center circle as you scroll down the page. The circles dynamically fetch live data (images and descriptions) from an API and display them in a circular layout. The project is fully responsive for mobile, tablet, and 4K monitors.

---

## Features

- **Dynamic Data Fetching:** Fetches client data, including images and descriptions, from a live API.
- **Scrolling Animation:** Circles are hidden initially and animate outward from the center circle when the user scrolls down.
- **Responsive Design:** Adapts to different screen sizes:
  - Mobile: Displays the topic and description on top, circles below.
  - Tablet: Scaled layout with appropriate spacing.
  - 4K Monitors: Enlarged visuals for high-resolution screens.
- **Dynamic Circle Addition:** Handles additional circle elements (e.g., dummy images) seamlessly within the circular layout.

---

## Demo

Provide a link to your live demo (if hosted) or a preview GIF showing the scrolling animation.

---

## Installation

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/your-username/circle-scrolling-animation.git
    cd circle-scrolling-animation
    ```

2. **Open the Project:**
    Open the `index.html` file in any modern browser to view the project locally.

---

## File Structure

```plaintext
.
|-- our-clients.html            # Main HTML file
|-- styles.css            # CSS for styling and responsiveness
|-- script.js             # JavaScript for fetching data and animations
|-- README.md             # Documentation (this file)
```

---

## API Details

The project fetches data from the following API endpoint:

- **API URL:** `https://admin.processdrive.com/api/page/home`

### Data Structure

The API returns a JSON response containing `sub_pages` with information about clients:

- **Key Fields:**
  - `category_slug`: Used to identify the "our-clients" category.
  - `image`: The client’s image URL.
  - `translations[0].title`: The title of the client.
  - `translations[0].description`: A short description of the client.

---

## How It Works

1. **Data Fetching:**
   - The JavaScript `fetch` function retrieves data from the API.
   - Relevant client data is filtered based on the `category_slug` value `"our-clients"`.

2. **Circle Rendering:**
   - Each client image is displayed in a circle element.
   - A dummy image can be dynamically added as well.

3. **Animation:**
   - Circles are hidden initially (`opacity: 0`).
   - On scrolling, circles animate outward from the center circle using CSS `transform` properties.

4. **Responsive Layout:**
   - Mobile: Topic and description on top, circles below.
   - Tablet: Adjusted spacing and sizes.
   - 4K Monitors: Enlarged visuals for clarity.

---

## Technologies Used

- **HTML5**: For structuring the page.
- **CSS3**: For styling and animations.
- **JavaScript (ES6)**: For fetching data, DOM manipulation, and animations.

---

## Customization

1. **Change API URL:**
   Update the `apiUrl` variable in `script.js` to fetch data from a different endpoint.

2. **Adjust Animation Timing:**
   Modify `transition` properties in the `.circle` CSS class to customize animation speed.

3. **Add More Circles:**
   Use the `addCircleToContainer` function in `script.js` to dynamically add more circles.

---

## Responsive Design Notes

- **Mobile Devices:**
  - Topic and description are displayed at the top.
  - Circles are resized to fit smaller screens.

- **Tablet Devices:**
  - Slightly larger circles with more spacing.
  - Topic and description remain at the top, with circles below.

- **4K Monitors:**
  - Enlarged circles and text for better visibility.
  - High-resolution design to match screen size.

---

## Known Issues

- **Slow Scrolling Issue:** In rare cases, the circle animation may not trigger properly when scrolling slowly. This can be addressed by fine-tuning scroll event listeners.
- **API Downtime:** If the API is unavailable, a placeholder can be implemented for fallback behavior.

---

## Contribution

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature-name
    ```
3. Commit your changes:
    ```bash
    git commit -m "Add some feature"
    ```
4. Push the branch:
    ```bash
    git push origin feature-name
    ```
5. Submit a pull request.

---

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute this project as per the terms of the license.

---

## Author

https://github.com/siva-sanjai
Siva Sanjai J G

---

## Feedback

Feel free to reach out via GitHub issues if you have suggestions or find any bugs!

