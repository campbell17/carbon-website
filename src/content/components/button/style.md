---
label: Component
title: Button
tabs: ['Code', 'Usage', 'Style']
---

## Color

| Class                                                          | Property                 | SCSS             | HEX                    |
| -------------------------------------------------------------- | ------------------------ | ---------------- | ---------------------- |
| `.bx--btn--primary` </br> `.bx--btn--secondary`                | background-color, border | $brand-01        | #3d70b2                |
| `.bx--btn--primary:hover`                                      | background-color         | $hover-primary   | #30588c                |
| `.bx--btn--primary:disabled`                                   | opacity                  | $brand-01        | #3d70b2 at 50% opacity |
| `.bx--btn--secondary:hover`                                    | background-color         | $hover-secondary | #3d70b2                |
| `.bx--btn--tertiary`                                           | background-color         | $ui-05           | #5a6872                |
| `.bx--btn--tertiary:hover`                                     | background-color         | $ui-05           | #5a6872                |
| `.bx--btn--danger--primary`</br> `.bx--btn--danger--secondary` | background-color         | $support-01      | #e0182d                |
| `.bx--btn--danger--primary:hover`                              | background-color         | $hover-danger    | #bd1427                |
| `.bx--btn--danger--secondary:hover`                            | border                   | $support-01      | #e0182d                |

<div data-insert-component="ImageGrid">
  <div>
    ![Example of a normal Primary Button](images/button-style-1.png)
  </div>
  <div>
    ![Example of a Primary Button on hover](images/button-style-2.png)
  </div>
  <div>
    ![Example of a disabled Primary Button](images/button-style-3.png)
  </div>
  <div>
    ![Example of a Secondary Button](images/button-style-4.png)
  </div>
  <div>
    ![Example of a Secondary Button on hover](images/button-style-5.png)
  </div>
  <div>
    ![Example of a disabled Secondary Button](images/button-style-6.png)
  </div>
  <div>
    ![Example of a normal Ghost Button](images/button-style-15.png)
  </div>
  <div>
    ![Example of a Ghost Button on hover](images/button-style-16.png)
  </div>
  <div>
    ![Example of a disabled Ghost Button](images/button-style-17.png)
  </div>
</div>
_Primary, Secondary, and Ghost Button state examples_

## Typography

Button text should be set in sentence case, with only the first word in a phrase and any proper nouns capitalized.

| Class      | Font-size (px/rem) | Font-weight     | Type style       |
| ---------- | ------------------ | --------------- | ---------------- |
| `.bx--btn` | 14 / 0.875         | Semi-Bold / 600 | `.bx--type-zeta` |

## Structure

A Button cannot have any element or text within 16 pixels / 1 rem of its borders. For Button groups, the primary button is positioned on the outside of the set, while the secondary button is positioned inside. For a Button with a glyph, the space between the button label and the glyph must be greater than or equal to 16 pixels / 1 rem. This is to accommodate for instances where two or more buttons with glyphs appear together.

| Class                            | Property                    | px / rem | Spacing token |
| -------------------------------- | --------------------------- | -------- | ------------- |
| `.bx--btn--primary`              | height                      | 40 / 2.5 | $spacing-2xl  |
| `.bx--btn--sm`                   | height                      | 32 / 2   | $spacing-xl   |
| `.bx--btn`                       | padding-left, padding-right | 16 / 1   | $spacing-md   |
| `.bx--btn--sm`                   | padding-left, padding-right | 16 / 1   | $spacing-md   |
| `.bx--btn .bx--btn__icon`        | margin-left, margin-right   | 8 / 0.5  | $spacing-xs   |
| `.bx--btn--ghost .bx--btn__icon` | margin-left, margin-right   | 8 / 0.5  | $spacing-xs   |

<div data-insert-component="ImageGrid">
  <div>
    ![Structure for a Primary Button](images/button-style-7.png)
  </div>
  <div>
    ![Structure for a small Primary Button](images/button-style-8.png)
  </div>
</div>
_Structure measurements for small and regular Primary Button | px / rem_

<div data-insert-component="ImageGrid">
  <div>
    ![Spacing for Primary Button](images/button-style-9.png)
  </div>
  <div>
    ![Spacing for small Primary Button](images/button-style-10.png)
  </div>
  <div>
    ![External Button spacing](images/button-style-11.png)
  </div>
  <div>
    ![Internal spacing for a Button with glyph](images/button-style-12.png)
  </div>
  <div>
  ![Ghost button spacing](images/button-style-13.png)
  </div>
  <div>
  ![Small Ghost button spacing](images/button-style-14.png)
  </div>
</div>
_Spacing measurements for various Button types | px / rem_

### Recommended

The following specs are not built into any of the Button components but are recommended by design as the proper distance between Buttons.

| Attribute        | Property                  | px / rem   | Spacing token |
| ---------------- | ------------------------- | ---------- | ------------- |
| External: button | margin                    | 10 / 0.625 | -             |
| Button pairings  | margin-left, margin-right | 8 / 0.5    | $spacing-xs   |
