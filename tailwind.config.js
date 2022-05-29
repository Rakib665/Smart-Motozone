module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    daisyui: {
        themes: [
          {
            mytheme: {
              primary: "#ABB2B9",
              secondary: "#95A5A6",
              accent: "#37cdbe",
              neutral: "#3d4451",
              "base-100": "#ffffff",
            },
          },
          "dark",
          "cupcake",
        ],
      },
    plugins: [require("daisyui")],
}