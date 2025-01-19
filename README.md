This are the instructions for the application:

# FrontEnd Developer Technical Test for NativeBo



Using the **PokeAPI** (https://pokeapi.co/), create the following project with the specified features:

## Navigation Menu:
The navigation menu should include the following elements:
- Pokémon logo
- **Home**
- **Favorites**
- A link to the **PokeAPI** (https://pokeapi.co/)

## Home Page:
The home page must display the following information in **cards**:

- Pokémon's name
- Pokémon's image (sprite) in its **shiny** version, if available. If the shiny version is not available, display the default image.
- Pokémon's type (nature). Each type should be shown with a unique color, for example: fire in red, poison in purple, etc.
- Display at least 4 stats, such as: HP, Attack, Defense, Special Attack, etc.
- Each card should have a button to add the Pokémon to favorites.

## Favorites Page:
- This page should display the Pokémon selected as favorites on the home page.
- It should allow users to remove Pokémon from the favorites list.

## Technologies to use:
- **React** or **Astro**
- **Tailwind CSS** (mandatory)
- API requests using **fetch** or **axios**

## Functional Requirements:
- Display the cards in groups of 20 and implement **infinite scroll** to load more items.
- Favorites must persist after closing the page (using localStorage or a similar solution).

## Component Modularization:
- The project should be organized into **reusable components**. Examples of components you can create include:
  - **Navbar**: A component for the navigation menu.
  - **PokemonCard**: A component to display each Pokémon's information (name, image, type, stats, etc.).
  
Proper modularization ensures clean and organized code, which is key for scalable projects.

> [!NOTE]
> - ## Repository and Deployment:
> - The project must be hosted on a **GitHub** repository.
> - The project must be deployed on **Netlify** or **GitHub Pages** for evaluation.

> [!IMPORTANT]
> ## Additional Notes:
> - The page must be fully **responsive**, adapting to mobile, tablet, and desktop views using **flexbox** or **grid**, along with **Tailwind CSS**.
> - The design will be considered an important evaluation criterion.