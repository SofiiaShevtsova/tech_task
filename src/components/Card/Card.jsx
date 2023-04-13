import { useState } from "react";
import logo from "../../images/logo1x-min.png";
import logo2x from "../../images/logo2x-min.png";
import cardsStyle, { Button } from "./Card_style";
import { updateUser } from "../../service/usersList";

const { BoxForCard, BoxForUser, Logo, Avatar, Tweets, Followers, BoxForLogo } =
  cardsStyle;

const Card = ({ user }) => {
  const [isFollowing, setFollowing] = useState(user.isFollowing);

  const styleFollowers = (followers) => {
    return new Intl.NumberFormat("en-US").format(followers);
  };

  const onBtnClick = () => {
    setFollowing((prev) => !prev);
    user.followers = isFollowing ? user.followers - 1 : user.followers + 1;
    updateUser(user.id, {
      followers: user.followers,
      isFollowing: !isFollowing,
    });
  };
  return (
    <BoxForCard>
      <BoxForLogo>
        <Logo srcSet={`${logo}, ${logo2x} 2x`} alt="logo" />
      </BoxForLogo>
      <BoxForUser>
        <Avatar src={user.avatar} alt="user avatar" />
        <Tweets> {user.tweets} tweets</Tweets>
        <Followers>{styleFollowers(user.followers)}</Followers>
        <Button
          type="button"
          colorBytton={isFollowing ? "rgba(92, 211, 168, 1)" : "#EBD8FF"}
          onClick={onBtnClick}
        >
          {isFollowing ? "Following" : "Follow"}
        </Button>
      </BoxForUser>
    </BoxForCard>
  );
};
export default Card;
