import './App.css';
import Avatar from './basic/components/Avatar';
import Profile from './basic/components/Profile';

function AppProfile() {
  const click = (event) => {
    console.log(event);
    alert('clicked');
  };
  return (
    <>
      <button onClick={click}>버튼</button>
      <Avatar img="git_img.jpg" isNew={true} />
      <Profile
        img="git_img.jpg"
        name="김서현"
        title="프론트엔드 개발자"
        isNew={true}
      />
      <Profile img="git_img.jpg" name="서현" title="프론트엔드 개발자" />
      <Profile img="git_img.jpg" name="립바미" title="프론트엔드 개발자" />
    </>
  );
}

export default AppProfile;
