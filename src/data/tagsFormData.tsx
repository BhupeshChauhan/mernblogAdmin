import * as Yup from 'yup';

const tagsFormData = () => {
  const tagsFormArray = [
    {
      id: 'name',
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
      name: 'featuredImage',
      label: 'Featured Image',
      placeholder: 'Select Featured Image',
      formInputType: 'imageSelector',
      xs: 6,
      sm: 6,
      lg: 6,
      xl: 6,
      fullWidth: true,
    },
    {
      id: 'slug',
      name: 'slug',
      label: 'Slug',
      placeholder: 'Enter Slug',
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
      id: 'description',
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
  ];

  const tagsInitialValues = {
    name: '',
    slug: '',
    description: '',
    featuredImage: '',
  };
  const tagsValidationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    slug: Yup.string().required('Slug is required'),
    description: Yup.string().required('Description is required'),
    featuredImage: Yup.string().required('Featured Image is required'),
  });
  return { tagsFormArray, tagsInitialValues, tagsValidationSchema };
};

export default tagsFormData;
