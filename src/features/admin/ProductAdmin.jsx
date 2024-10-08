import { useNavigate } from "react-router";
import { Avatar, Button, Card, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "../product/productApi";
import { imageUrl } from "../../constants/api_urls";

const AdminProducts = () => {
  const { isLoading, error, data } = useGetAllProductsQuery();

  const TABLE_HEAD = ["", "Title", "CreatedAt", "Edit", "Delete"];

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  if (error) {
    return <h1>Error loading products.</h1>;
  }

  // Check if data is an array
  if (!Array.isArray(data)) {
    return <h1>No products found or data is invalid.</h1>;
  }

  return (
    <div className="p-5">
      <div className="mb-4 flex justify-between">
        <h1 className="text-2xl font-semibold">Welcome To Shops</h1>
        <Link to={'/product-add'}>
          <Button className="py-2 px-4" color="deep-purple" size="lg">
            Add Product
          </Button>
        </Link>
      </div>

      <Card className="max-w-3xl">
        <table className="table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map(({ title, image, createdAt, _id }, index) => {
              const isLast = index === data.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={_id}>
                  <td className={classes}>
                    <Avatar src={`${imageUrl}${image}`} alt="avatar" />
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {title}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {new Date(createdAt).toLocaleDateString()}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Link to={`/product-edit/${_id}`}>
                      <Button color="light-green" size="sm">
                        Edit
                      </Button>
                    </Link>
                  </td>
                  <td className={classes}>
                    <Button color="orange" size="sm">
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default AdminProducts;
