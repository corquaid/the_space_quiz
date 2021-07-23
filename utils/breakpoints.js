import { createMuiTheme } from "@material-ui/core/styles";

const Theme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 450,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
})

export default Theme;
