import { GridColDef } from '@mui/x-data-grid';
import CustomList from '../../../components/CustomPageLayout/CustomList';
import React, { useEffect, useState } from 'react';
import { Chip, Grid, Typography } from '@mui/material';
import { redirect, useNavigate } from 'react-router-dom';
import checkModulePermission, {
  checkPermissionDelete,
  moduleAction,
  moduleName,
} from '../../../utils/checkModulePermission';
import { useGlobalContext } from '../../../context/GlobalContext';
import CustomMenu from '../../../components/CustomMenu';
import { format, parseISO } from 'date-fns';
import { TagsApi } from '../../../apis/TagsApi';

const Tags = () => {
  const [isLoading, setisLoading] = useState(false);
  const [deleteMoadal, setDeleteMoadal] = useState(false);
  const [SelectedTags, setSelectedTags] = useState<any>({});
  const [activateMoadal, setActivateMoadal] = useState(false);
  const [data, setData] = useState(false);
  const navigate = useNavigate();

  const { userData } = useGlobalContext();

  const handleDelete = () => {
    setisLoading(true);
    TagsApi.deactivate(SelectedTags).then((categories) => {
      // response handling
      setData(categories);
      setisLoading(false);
    });
    setDeleteMoadal(false);
    setSelectedTags({});
    setisLoading(false);
  };

  const handleActivate = () => {
    setisLoading(true);
    TagsApi.activate(SelectedTags).then((categories) => {
      // response handling
      setData(categories);
      setisLoading(false);
    });
    setActivateMoadal(false);
    setSelectedTags({});
    setisLoading(false);
  };

  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      renderCell: (params) => {
        const menuItem = [
          {
            label: <Typography color='blue'>Edit</Typography>,
            onClick: () => navigate(`/tags/edit/${params?.row?._id}`),
            disable: !checkModulePermission(userData, moduleName.TAGS, moduleAction.EDIT),
          },
          {
            label: (
              <Typography color={params.row.inActive ? 'green' : 'red'}>
                {params.row.inActive ? 'Activate' : 'Deactivate'}
              </Typography>
            ),
            onClick: () => {
              if (params.row.inActive) {
                setActivateMoadal(true);
                setSelectedTags(params.row);
              } else if (!params.row.inActive) {
                setDeleteMoadal(true);
                setSelectedTags(params.row);
              }
            },

            disable: checkPermissionDelete(userData, params, moduleName.TAGS),
          },
        ];
        return (
          <Grid container>
            <Grid item xs={10}>
              {params.value}
            </Grid>
            <Grid item xs={2}>
              <CustomMenu menuItem={menuItem} />
            </Grid>
          </Grid>
        );
      },
    },
    {
      field: 'featuredImage',
      headerName: 'Featured Image',
      flex: 1,
      renderCell: (params) => {
        // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
        return <img src={params.value} width={100} height={60} />;
      },
    },
    {
      field: 'name',
      headerName: 'Tag Name',
      flex: 1,
    },
    {
      field: 'slug',
      headerName: 'Tag Slug',
      flex: 1,
    },
    {
      field: 'description',
      headerName: 'Description',
      flex: 1,
    },
    {
      field: 'createdAt',
      headerName: 'Created At',
      flex: 1,
      renderCell: (params: any) => {
        return <>{format(parseISO(params?.row?.createdAt), 'MMMM dd, yyyy')}</>;
      },
    },
    {
      field: 'inActive',
      headerName: 'Status',
      flex: 1,
      renderCell: (params: any) => {
        if (params?.row?.inActive) {
          return <Chip label='Deactivated' color='warning' variant='outlined' />;
        } else if (!params?.row?.inActive) {
          return <Chip label='Active' color='primary' variant='outlined' />;
        }
        return null;
      },
    },
  ];

  useEffect(() => {
    setisLoading(true);
    TagsApi.getAll()
      .then((products) => {
        // response handling
        setData(products);
        setisLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setisLoading(false);
      });
  }, []);

  return (
    <CustomList
      isLoading={isLoading}
      pageTitle={'Tags List'}
      addLink={'/tags/add'}
      addLinkTitle={'Add Tags'}
      data={data}
      columnsDef={columns}
      DeleteMoadal={deleteMoadal}
      setDeleteMoadal={setDeleteMoadal}
      handleDelete={handleDelete}
      ActivateMoadal={activateMoadal}
      setActivateMoadal={setActivateMoadal}
      handleActivate={handleActivate}
      SelectedPost={SelectedTags}
      setSelectedPost={setSelectedTags}
    />
  );
};

export default Tags;