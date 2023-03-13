export const moAttr = {
  fieldAttr: (name, val) => {
    switch (name) {
      case 'password':
        break;
      case 'confirm_password':
        break;
      case 'sin':
        break;
      case 'confirm-password':
        break;

      default:
        window.Moengage.add_user_attribute(name, val);
        break;
    }
  },
  selectAttr: (name, val) => {
    window.Moengage.add_user_attribute(name, val);
  },
};
