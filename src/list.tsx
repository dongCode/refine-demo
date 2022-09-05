import {
    List,
    TextField,
    TagField,
    DateField,
    Table,
    useTable,
} from "@pankod/refine-antd";

import { IPost } from './index.d'
export const PostList: React.FC = () => {
    const { tableProps } = useTable<IPost>();
    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column dataIndex="title" title="title" />
                <Table.Column
                    dataIndex="status"
                    title="status"
                    render={(value) => <TagField value={value} />}
                />
                <Table.Column
                    dataIndex="createdAt"
                    title="createdAt"
                    render={(value) => <DateField format="LLL" value={value} />}
                />
            </Table>
        </List>
    );
};