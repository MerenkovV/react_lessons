import { connect } from 'react-redux'
import Friends from './FriendsC.jsx';
import { AddUsersActionCreator, FollowFriendActionCreator, SetUsersActionCreator} from '../../redux/FriendsPageReducer';
import { DeleteFriendActionCreator, AddFriendActionCreator } from '../../redux/SidebarPageReducer';

let mapStateToProps = (state) => {
    return{
        friends: state.friendsPage.friends,
    }
};

let mapDispatchToProps = (dispatch) => {
    return{
        ChangeFollow: (isFollow, id, name) => {

            dispatch(FollowFriendActionCreator(isFollow, id));
            if(isFollow){
                dispatch(DeleteFriendActionCreator(name, id));
            }else{
                dispatch(AddFriendActionCreator(name, id));
            }
        },
        AddUsers: (newState) => {
            dispatch(AddUsersActionCreator(newState))
        },
        SetUsers: (newFriends) => {
            dispatch(SetUsersActionCreator(newFriends))
        }
    }
};

const FriendItemContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendItemContainer;