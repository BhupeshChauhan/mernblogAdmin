import { CreateEditorContextProvider } from '../../../../cms/context/CreateEditorContext';
import CustomEditor from '../../../../cms/components/CustomEditor';
import DashboardCard from '../../../../../common/DashboardCard';

const PostEdit = () => {
  return (
    <CreateEditorContextProvider>
      <DashboardCard>
        <CustomEditor isEdit={true} draft={true} />
      </DashboardCard>
    </CreateEditorContextProvider>
  );
};

export default PostEdit;
