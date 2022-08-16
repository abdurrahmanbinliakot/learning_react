import React from "react";

const Post = ({ tableData }) => {
  // console.log(tableData);
  return (
    <div>
      <table border="1px" sellSpacing="0" cellPadding="0">
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
        {tableData?.map((data) => {
            const {id,title,body} = data 
          return (
            <tr>
              <td>{id}</td>
              <td>{title}</td>
              <td>{body}</td>
            </tr>
          );
        })}
      </table>
      {/*            <table border="1px" sellSpacing="0" cellPadding="0">
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
                    {tableData?.map((data)=>{
                        return(
                            <tr>
                                <td>{data?.id}</td>
                                <td>{data?.title}</td>
                                <td>{data?.body}</td>
                            </tr>
                        )
                    })}
                
            </table> */}
    </div>
  );
};

export default Post;
