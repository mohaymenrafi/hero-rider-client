import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import FormStyled from '../../styledComponents/FormStyled';
import Loader from '../Message/Loader';
import Pagination from './Pagination';

export default function AdminUI() {
  const [users, setUser] = useState();
  const [filters, setFilters] = useState({});
  const [monitorUser, setMonitorUser] = useState(true);
  const [pageCount, setPageCount] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);
  const [processing, setProcessing] = useState(false);
  const [totalUser, setTotalUser] = useState(0);
  // const [blockList, setBlockList] = useState([]);
  const { isLoading, removeUser } = useAuth();
  const handleFilter = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
    setMonitorUser(!monitorUser);
  };
  const size = 10;
  const baseurl = `http://localhost:5000/users?pageIndex=${pageIndex}&size=${size}`;

  const fullUrl = `${baseurl}&${Object.keys(filters)
    .filter((key) => !!filters[key])
    .map((key) => `${key}=${filters[key]}`)
    .join('&')}`;
  console.log(fullUrl);

  useEffect(() => {
    setProcessing(true);
    axios.get(fullUrl).then((res) => {
      setUser(res.data.userFilter);
      // setBlockList(res.data.userFilter);
      const { count } = res.data;
      setTotalUser(count);
      setPageCount(Math.ceil(count / size));
      setProcessing(false);
    });
  }, [monitorUser, pageIndex]);

  // blockList.forEach((item) => (item.isBlocked = false));
  // // console.log(blockList);
  const handleCheckbox = (e) => {
    console.log(e.currentTarget);
  };

  if (isLoading) return <Loader />;
  return (
    <div className="container mx-auto py-16 grid grid-cols-1 md:grid-cols-8 gap-12">
      <div className="md:col-span-2">
        <h2 className="text-3xl font-medium mb-8">Filter</h2>
        <FormStyled className="mr-6">
          <div>
            <label htmlFor="email">Fiter By Email</label>
            <input name="email" type="text" onChange={handleFilter} />
          </div>
          <div>
            <label htmlFor="phone">Fiter By Phone</label>
            <input name="phone" type="text" onChange={handleFilter} />
          </div>
          <div>
            <label htmlFor="fullName">Fiter By Name</label>
            <input name="fullName" type="text" onChange={handleFilter} />
          </div>
          <div onChange={handleFilter}>
            <h4 className="mb-2">Filter By Age</h4>
            <div>
              <input type="radio" name="age" id="1" value="30" />
              <label className="ml-2" htmlFor="1">
                18-30
              </label>
            </div>
            <div>
              <input type="radio" name="age" id="2" value="40" />
              <label className="ml-2" htmlFor="2">
                31-40
              </label>
            </div>
            <div>
              <input type="radio" name="age" id="3" value="50" />
              <label className="ml-2" htmlFor="3">
                41-50
              </label>
            </div>
            <div>
              <input type="radio" name="age" id="4" value="51" />
              <label className="ml-2" htmlFor="4">
                50+
              </label>
            </div>
            <div>
              <input type="radio" name="age" id="all" value="all" />
              <label className="ml-2" htmlFor="all">
                All
              </label>
            </div>
          </div>
        </FormStyled>
      </div>
      <div className="flex flex-col md:col-span-6">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Contact
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Age
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Vehicle Type
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Block
                    </th>
                    {/* <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Block</span>
                    </th> */}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users?.map((person) => (
                    <tr key={person._id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={person.profileImage}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {person.fullName}
                            </div>
                            {/* <div className="text-sm text-gray-500">
                              {person.email}
                            </div> */}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {person.email}
                        </div>
                        <div className="text-sm text-gray-500">
                          {person.phone}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {person.age}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {person.userRole}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">
                        {person.vehicleType}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          type="button"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          {' '}
                          Select
                          <input
                            type="checkbox"
                            className="ml-4"
                            onClick={handleCheckbox}
                          />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {processing && <Loader />}
              <Pagination
                pageCount={pageCount}
                users={users}
                setPageIndex={setPageIndex}
                pageIndex={pageIndex}
                totalUser={totalUser}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
