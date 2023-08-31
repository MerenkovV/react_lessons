import React from 'react'
import { connect } from 'react-redux'
import { AddUsers, ChangePage, ChangeFollow, GetUsersCount, FetchPreloader, SetUsers } from '../../redux/FriendsPageReducer';
import { ChangeFriend } from '../../redux/SidebarPageReducer';
import axios from 'axios';
import Friends from './Friends';
import FriendItem from './FriendItem/FriendItem';
import preloader from './../../image/Spinner.svg';

class FriendsAPI extends React.Component {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}`)
            .then((info) => {

                this.props.SetUsers(info.data.items);
                this.props.GetUsersCount(info.data.totalCount)
            });
    }

    onChangePage = (newPage) => {
        this.props.ChangePage(newPage);
        this.props.FetchPreloader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${newPage}&count=${this.props.pageSize}`)
            .then((info) => {
                this.props.SetUsers(info.data.items);
                this.props.GetUsersCount(info.data.totalCount)
                this.props.FetchPreloader(false)
            });
    }

    render() {
        let friendsElements = this.props.friends.map((friend, index) => {
            return (
            <>
            {this.props.isFetching ? 
            <img style={{width: "97px", height: "97px", marginBottom:"30px"}} src={preloader}/> : 
            <FriendItem ChangeFollow={this.props.ChangeFollow} ChangeFriend={this.props.ChangeFriend} follow={friend.followed} id={friend.id} name={friend.name} about={friend.about} country={friend.country} city={friend.city} />}
            
            </>
            );
        });
    
        let totalPages = this.props.totalUsersCount / this.props.pageSize;
    
        let pages = [];
    
        for(let i = 1; i <= totalPages && i <= 30; i++){
            pages.push(i);
        }

        return <Friends onChangePage={this.onChangePage} currentPage={this.props.currentPage} friendsElements={friendsElements} pages={pages}/>
        
    }
}

let mapStateToProps = (state) => {
    return {
        friends: state.friendsPage.friends,
        pageSize: state.friendsPage.pageSize,
        totalUsersCount: state.friendsPage.totalUsersCount,
        currentPage: state.friendsPage.currentPage,
        isFetching: state.friendsPage.isFetching
    }
};

// let mapDispatchToProps = (dispatch) => {
//     return {
//         ChangeFollow: (isFollow, id, name) => {

//             dispatch(FollowFriendActionCreator(isFollow, id));
//             if (isFollow) {
//                 dispatch(DeleteFriendActionCreator(name, id));
//             } else {
//                 dispatch(AddFriendActionCreator(name, id));
//             }
//         },
//         AddUsers: (newState) => {
//             dispatch(AddUsersActionCreator(newState))
//         },
//         SetUsers: (newFriends) => {
//             dispatch(SetUsersActionCreator(newFriends))
//         },
//         GetUsersCount: (count) => {
//             dispatch(GetTotalUsersCountActionCreator(count))
//         },
//         ChangePage: (newPage) => {
//             dispatch(ChangePageActionCreator(newPage))
//         },
//         FetchPreloader: (isFetching) => {
//             dispatch(PreloaderActionCreator(isFetching))
//         }
//     }
// };

const FriendItemContainer = connect(mapStateToProps, {
    ChangeFollow,
    AddUsers,
    SetUsers,
    GetUsersCount,
    ChangePage,
    FetchPreloader,
    ChangeFriend
})(FriendsAPI);

export default FriendItemContainer;