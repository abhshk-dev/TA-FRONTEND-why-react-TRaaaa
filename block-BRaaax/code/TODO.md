# Button Design System

## Properties That The Button Component Can Be Passed

| Property         | Description                         | Type          | Required |
| :--------------- | :---------------------------------- | :------------ | :------- |
| `disabled`       | Sets the button to a disabled state | `boolean`     | false    |
| `label `         | The button text                     | `string`      | true     |
| `onClickHandler` | The action to be dispatched onClick | `function`    | true     |
| `size`           | The size of the button              | `ButtonSizes` | false    |
| `type`           | The type of button                  | `ButtonTypes` | false    |

## Types

| Type          | Values                           | Default    |
| :------------ | :------------------------------- | :--------- |
| `ButtonSizes` | `SMALL` `MEDIUM` `LARGE`         | `MEDIUM`   |
| `ButtonTypes` | `PRIMARY` `SECONDARY` `TERTIARY` | `PRIMARY ` |

### Example of using the Button component

https://www.fiverr.com/users/mubeennisar/portfolio/NjFjOGI4NTkzNzY0MjgwMDAxMGJkYWM5

```jsx..
<Button
  label="Button"
/>
<Button
  size="small"
  label="Button"
  type="secondary"
/>
<Button
  size="large"
  label="Button"
  type="tertiary"
  onClickHandler={() => alert("You Clicked Me!")}
/>

```

### Demo

![Button Display](https://github.com/nnnkit/react-tasks/raw/master/button-types/buttons.png)
