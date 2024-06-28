import AddGroup from './components/add_field';
import Navbar from './components/navbar';
import SelectField from './components/select_field';
const links = [
    {
      text: 'departments',
      icon: 'home-outline',
      count: 0,
      href: '/department',
    },
    {
      text: 'employees',
      icon: 'person-outline',
      count: 0,
      href: '/employee',
    },
    {
      text: 'companies',
      icon: 'home-outline',
      count: 0,
      href: '/',
    },
    {
      text: 'contacts',
      icon: 'call-outline',
      count: 0,
      href: '/contact',
    },
    {
        text: 'bulk upload',
        icon: 'cloud-upload-outline',
        count: 0,
        href: '/bulk-upload',
      },
  ];

const companies=[
    "Fincheck",
    "Bakertilly",
    "Claxon",
    "Netflix",
    "Google",

];
const Department=()=>{
    return(
        <>
            <Navbar heading="duty" links={links} />
            <SelectField options={companies} title="select company" />
            <AddGroup placeholder="enter department name" />
        </>
    )
}

export default Department;