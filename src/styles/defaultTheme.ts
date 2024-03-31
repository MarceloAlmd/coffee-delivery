export const defaultTheme = {
  product: {
    yellowDark: "#C47F17",
    yellow: "#DBAC2C",
    yellowLight: "#F1E9C9",

    purpleDark: "#4B2995",
    purple: "#8047F8",
    purpleLight: "#EBE5F9",
  },

  base: {
    title: "#272221",
    subtitle: "#403937",
    text: "#574F4D",
    label: "#8D8686",
    hover: "#D7D5D5",
    button: "#E6E5E5",
    input: "#EDEDED",
    card: "#F3F2F2",
    background: "#FAFAFA",
    white: "#FFFFFF",
  },

  typography: {
    font: {
      baloo: {
        sizes: {
          titleXL: "3rem",
          titleL: "2rem",
          titleM: "1.5rem",
          titleS: "1.25rem",
          titleXS: "1.125rem",
        },
        weights: {
          extraBold: "900",
          bold: "bold",
        },
        lineHeight: "130%",
      },
      roboto: {
        sizes: {
          textL: "1.25rem",
          textM: "1rem",
          textS: "0.875rem",
          textXS: "0.75rem",
          tag: "0.625rem",
          buttonG: "0.875rem",
          buttonM: "0.75rem",
        },
        weights: {
          regular: "regular",
          bold: "bold",
        },
        lineHeight: {
          small: "130%",
          medium: "160%",
        },
      },
    },
  },
} as const;
