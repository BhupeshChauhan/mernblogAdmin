import CustomList from '../../../../../components/CustomPageLayout/CustomList';
import { PostAPI } from '../../../apis/postApi';
import PostListColumns from '../../../data/list/postListColumns';

const Posts = () => {
  return (
    <CustomList
      addLink={'/posts/add'}
      addLinkTitle={'Add Posts'}
      columnsDef={(setActivateMoadal: any, setSelected: any, setDeleteMoadal: any) => PostListColumns(setActivateMoadal, setSelected, setDeleteMoadal)}
      deleteAPI={(payload: any) => PostAPI.deactivate(payload)}
      activateAPI={(payload: any) => PostAPI.activate(payload)}
      getAPI={(payload: any) => PostAPI.getAll(payload)}
    />
  );
};

export default Posts;
