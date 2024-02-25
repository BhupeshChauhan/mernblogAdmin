import * as Yup from 'yup';

const rolesFormData = () => {
  const rolesFormArray = [
    {
      label: 'Roles Details',
      formInputType: 'section',
      xs: 12,
      sm: 12,
      lg: 12,
      xl: 12,
    },
    {
      id: 'Name',
      name: 'name',
      label: 'Name',
      placeholder: 'Enter Name',
      required: true,
      disabled: false,
      formInputType: 'input',
      type: null,
      InputProps: null,
      variant: 'outlined',
      autoComplete: null,
      size: 'sm',
      margin: 'none',
      fullWidth: true,
      multiLine: false,
      maxRows: null,
      rows: null,
      xs: 6,
      sm: 6,
      lg: 6,
      xl: 6,
    },
    {
      id: 'Description',
      name: 'description',
      label: 'Description',
      placeholder: 'Enter Description',
      required: true,
      disabled: false,
      formInputType: 'input',
      type: null,
      InputProps: null,
      variant: 'outlined',
      autoComplete: null,
      size: 'sm',
      margin: 'none',
      fullWidth: true,
      multiLine: false,
      maxRows: null,
      rows: null,
      xs: 6,
      sm: 6,
      lg: 6,
      xl: 6,
    },
    {
      label: 'Module Permissions',
      formInputType: 'section',
      xs: 12,
      sm: 12,
      lg: 12,
      xl: 12,
    },
    {
      id: 'dashboard',
      name: 'Dashboard',
      label: 'Dashboard Module',
      formInputType: 'checkboxGroup',
      CheckboxOptions: [{ name: 'dashboardView', label: 'View' }],
      xs: 6,
      sm: 6,
      lg: 6,
      xl: 6,
    },
    {
      id: 'posts',
      name: 'posts',
      label: 'Posts Module',
      formInputType: 'checkboxGroup',
      CheckboxOptions: [
        { name: 'postsView', label: 'View' },
        { name: 'postsAdd', label: 'Add' },
        { name: 'postsUpdate', label: 'Update' },
        { name: 'postsActivate', label: 'Activate' },
        { name: 'postsDeactivate', label: 'Deactivate' },
        { name: 'postsPublish', label: 'Publish' },
        { name: 'postsDraft', label: 'Draft' },
      ],
      xs: 6,
      sm: 6,
      lg: 6,
      xl: 6,
    },
    {
      id: 'categories',
      name: 'categories',
      label: 'Categories Module',
      formInputType: 'checkboxGroup',
      CheckboxOptions: [
        { name: 'categoriesView', label: 'View' },
        { name: 'categoriesAdd', label: 'Add' },
        { name: 'categoriesUpdate', label: 'Update' },
        { name: 'categoriesActivate', label: 'Activate' },
        { name: 'categoriesDeactivate', label: 'Deactivate' },
      ],
      xs: 6,
      sm: 6,
      lg: 6,
      xl: 6,
    },
    {
      id: 'tags',
      name: 'tags',
      label: 'Tags Module',
      formInputType: 'checkboxGroup',
      CheckboxOptions: [
        { name: 'tagsView', label: 'View' },
        { name: 'tagsAdd', label: 'Add' },
        { name: 'tagsUpdate', label: 'Update' },
        { name: 'tagsActivate', label: 'Activate' },
        { name: 'tagsDeactivate', label: 'Deactivate' },
      ],
      xs: 6,
      sm: 6,
      lg: 6,
      xl: 6,
    },

    {
      id: 'images',
      name: 'images',
      label: 'Images Module',
      formInputType: 'checkboxGroup',
      CheckboxOptions: [
        { name: 'imagesView', label: 'View' },
        { name: 'imagesAdd', label: 'Add' },
        { name: 'imagesUpdate', label: 'Update' },
        { name: 'imagesActivate', label: 'Activate' },
        { name: 'imagesDeactivate', label: 'Deactivate' },
      ],
      xs: 6,
      sm: 6,
      lg: 6,
      xl: 6,
    },
    {
      id: 'users',
      name: 'users',
      label: 'Users Module',
      formInputType: 'checkboxGroup',
      CheckboxOptions: [
        { name: 'usersView', label: 'View' },
        { name: 'usersAdd', label: 'Add' },
        { name: 'usersUpdate', label: 'Update' },
        { name: 'usersActivate', label: 'Activate' },
        { name: 'usersDeactivate', label: 'Deactivate' },
      ],
      xs: 6,
      sm: 6,
      lg: 6,
      xl: 6,
    },
    {
      id: 'Roles',
      name: 'Roles',
      label: 'Roles Module',
      formInputType: 'checkboxGroup',
      CheckboxOptions: [
        { name: 'rolesView', label: 'View' },
        { name: 'rolesAdd', label: 'Add' },
        { name: 'rolesUpdate', label: 'Update' },
        { name: 'rolesActivate', label: 'Activate' },
        { name: 'rolesDeactivate', label: 'Deactivate' },
      ],
      xs: 6,
      sm: 6,
      lg: 6,
      xl: 6,
    },
    {
      id: 'Draft',
      name: 'Draft',
      label: 'Draft Module',
      formInputType: 'checkboxGroup',
      CheckboxOptions: [
        { name: 'draftView', label: 'View' },
        { name: 'draftAdd', label: 'Add' },
        { name: 'draftUpdate', label: 'Update' },
        { name: 'draftActivate', label: 'Activate' },
        { name: 'draftDeactivate', label: 'Deactivate' },
      ],
      xs: 6,
      sm: 6,
      lg: 6,
      xl: 6,
    },
    {
      id: 'clientUser',
      name: 'clientUser',
      label: 'Client User Module',
      formInputType: 'checkboxGroup',
      CheckboxOptions: [{ name: 'clientUserView', label: 'View' }],
      xs: 6,
      sm: 6,
      lg: 6,
      xl: 6,
    },
  ];

  const rolesInitialValues = {
    name: '',
    description: '',
    dashboardView: false,
    postsView: false,
    postsAdd: false,
    postsUpdate: false,
    postsActivate: false,
    postsDeactivate: false,
    postsPublish: false,
    postsDraft: false,
    categoriesView: false,
    categoriesAdd: false,
    categoriesUpdate: false,
    categoriesActivate: false,
    categoriesDeactivate: false,
    tagsView: false,
    tagsAdd: false,
    tagsUpdate: false,
    tagsActivate: false,
    tagsDeactivate: false,
    usersView: false,
    usersAdd: false,
    usersUpdate: false,
    usersActivate: false,
    usersDeactivate: false,
    imagesView: false,
    imagesAdd: false,
    imagesUpdate: false,
    imagesActivate: false,
    imagesDeactivate: false,
    rolesView: false,
    rolesAdd: false,
    rolesUpdate: false,
    rolesActivate: false,
    rolesDeactivate: false,
    draftView: false,
    draftAdd: false,
    draftUpdate: false,
    draftActivate: false,
    draftDeactivate: false,
    clientUserView: false,
  };
  const rolesValidationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    description: Yup.string().required('Description is required'),
  });
  return { rolesFormArray, rolesInitialValues, rolesValidationSchema };
};

export default rolesFormData;