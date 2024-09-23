import { createGlobalStyle } from "styled-components";
import { variables } from "./variables";

export const GlobalStyles = createGlobalStyle`
    body {
        font-family: "Open Sans", sans-serif;
        background: ${variables.colors.background};
        color: ${variables.colors.text};
    }
`;
