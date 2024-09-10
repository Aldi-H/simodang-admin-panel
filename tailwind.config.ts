import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      ubuntu: ["Ubuntu", "ubuntu"],
    },
    extend: {
      colors: {
        schemesColors: {
          light: {
            primary: "#040404",
            onPrimary: "#FFFFFF",
            primaryContainer: "#282828",
            onPrimaryContainer: "#B5B3B3",
            secondary: "#745941",
            onSecondary: "#FFFFFF",
            secondaryContainer: "#FFDDC2",
            onSecondaryContainer: "#5C432D",
            tertiary: "#944A00",
            onTertiary: "#FFFFFF",
            tertiaryContainer: "#FF9F55",
            onTertiaryContainer: "#462000",
            error: "#BA1A1A",
            onError: "#FFFFFF",
            errorContainer: "#FFDAD6",
            onErrorContainer: "#410002",
            background: "#FEF7FF",
            onBackground: "#1D1B20",
            surface: "#F6F5F4",
            onSurface: "#4C4C4D",
            surfaceVariant: "#F2F2F1",
            onSurfaceVariant: "#5A6866",
            outline: "#C1C1C1",
            outlineVariant: "#E6E6E6",
            surfaceTint: "#AD8257",
            shadow: "#000000",
            scrim: "#000000",
            inverseSurface: "#322F35",
            inverseOnSurface: "#F4F0EF",
            inversePrimary: "#B1C5FF",
            surfaceDim: "#E8E8E8",
            surfaceBright: "#FDFDFD",
            surfaceContainerLowest: "#FFFFFF",
            surfaceContainerLow: "#F8F8F8",
            surfaceContainer: "#EFEFEF",
            surfaceContainerHigh: "#E8E8E8",
            surfaceContainerHighest: "#E1E1E1",
          },
          dark: {
            primary: "#B1C5FF",
            onPrimary: "#172E60",
            primaryContainer: "#304578",
            onPrimaryContainer: "#DAE2FF",
            secondary: "#C0C6DC",
            onSecondary: "#2A3042",
            secondaryContainer: "#404659",
            onSecondaryContainer: "#DCE2F9",
            tertiary: "#E0BBDD",
            onTertiary: "#412742",
            tertiaryContainer: "#593D59",
            onTertiaryContainer: "#FED7F9",
            error: "#FFB4AB",
            onError: "#690005",
            errorContainer: "#93000A",
            onErrorContainer: "#FFDAD6",
            background: "#141218",
            onBackground: "#E6E0E9",
            surface: "#121318",
            onSurface: "#E2E2E9",
            surfaceVariant: "#25262B",
            onSurfaceVariant: "#CAC4D0",
            outline: "#8F9099",
            outlineVariant: "#44464F",
            surfaceTint: "#465188",
            shadow: "#000000",
            scrim: "#000000",
            inverseSurface: "#E2E2E9",
            inverseOnSurface: "#2F3036",
            inversePrimary: "#485D92",
            surfaceDim: "#121318",
            surfaceBright: "#38393F",
            surfaceContainerLowest: "#0D0E13",
            surfaceContainerLow: "#1A1B21",
            surfaceContainer: "#1E1F25",
            surfaceContainerHigh: "#282A2F",
            surfaceContainerHighest: "#33343A",
          },
          fixed: {
            primaryFixed: "#DAE2FF",
            onPrimaryFixed: "#001947",
            primaryFixedDim: "#B1C5FF",
            onPrimaryFixedVariant: "#304578",
            secondaryFixed: "#DCE2F9",
            onSecondaryFixed: "#151B2C",
            secondaryFixedDim: "#C0C6DC",
            onSecondaryFixedVariant: "#404659",
            tertiaryFixed: "#FED7F9",
            onTertiaryFixed: "#2A122C",
            tertiaryFixedDim: "#E0BBDD",
            onTertiaryFixedVariant: "#593D59",
          },
        },
        system_light: {
          primary: "#485D92",
          secondary: "#585E71",
          tertiary: "#735572",
          error: "#93000A",
          outline: "#797677",
          background: "#FEF7FF",
          surface: "#FAF8FF",
          "inverse-primary": "#B1C5FF",
          shadow: "#000000",
          "surface-tint": "#6750A4",
          "outline-variant": "#C9C5C6",
          scrim: "#000000",
        },
        system_dark: {
          primary: "#B1C5FF",
          secondary: "#CCC2DC",
          tertiary: "#EFB8C8",
          error: "#F2B8B5",
          outline: "#938F99",
          background: "#141218",
          surface: "#141218",
          "inverse-primary": "#6750A4",
          shadow: "#000000",
          "surface-tint": "#D0BCFF",
          "outline-variant": "#49454F",
          scrim: "#000000",
        },
      },
      fontSize: {
        "display-1": "64px",
        "display-2": "56px",
        "display-3": "48px",
        "display-4": "32px",
        "heading-1": "38px",
        "heading-2": "32px",
        "heading-3": "26px",
        "heading-4": "22px",
        "heading-5": "18px",
        "heading-6": "14px",
        "paragraph-lead": "18px",
        "paragraph-default": "14px",
        "paragraph-small": "12px",
        caption: "11px",
        "font-button-large": "16px",
        "font-button": "14px",
        "font-button-small": "12px",
        "font-form-label-lg": "18px",
        "font-form-label": "14px",
        "font-form-label-sm": "12px",
        "font-form-input-lg": "18px",
        "font-form-input": "14px",
        "font-form-input-sm": "12px",
        "font-form-placeholder-lg": "18px",
        "font-form-placeholder": "14px",
        "font-form-placeholder-sm": "12",
        "font-table-header": "13px",
        menu: "14px",
      },
    },
  },
  plugins: [],
};
/*
  All hex value from 100% to 0% alpha:
sample

100% — FF
99% — FC
98% — FA
97% — F7
96% — F5
95% — F2
94% — F0
93% — ED
92% — EB
91% — E8
90% — E6
89% — E3
88% — E0
87% — DE
86% — DB
85% — D9
84% — D6
83% — D4
82% — D1
81% — CF
80% — CC
79% — C9
78% — C7
77% — C4
76% — C2
75% — BF
74% — BD
73% — BA
72% — B8
71% — B5
70% — B3
69% — B0
68% — AD
67% — AB
66% — A8
65% — A6
64% — A3
63% — A1
62% — 9E
61% — 9C
60% — 99
59% — 96
58% — 94
57% — 91
56% — 8F
55% — 8C
54% — 8A
53% — 87
52% — 85
51% — 82
50% — 80
49% — 7D
48% — 7A
47% — 78
46% — 75
45% — 73
44% — 70
43% — 6E
42% — 6B
41% — 69
40% — 66
39% — 63
38% — 61
37% — 5E
36% — 5C
35% — 59
34% — 57
33% — 54
32% — 52
31% — 4F
30% — 4D
29% — 4A
28% — 47
27% — 45
26% — 42
25% — 40
24% — 3D
23% — 3B
22% — 38
21% — 36
20% — 33
19% — 30
18% — 2E
17% — 2B
16% — 29
15% — 26
14% — 24
13% — 21
12% — 1F
11% — 1C
10% — 1A
9% — 17
8% — 14
7% — 12
6% — 0F
5% — 0D
4% — 0A
3% — 08
2% — 05
1% — 03
0% — 00
*/

export default config;
