import React from 'react'
import { connect } from 'react-redux'
import { AddUsers, GetUsersCount, SetUsers, delUserFollow, getPage, addUserFollow } from '../../redux/FriendsPageReducer';
import {ChangeId} from '../../redux/ProfilePageReducer'
import Friends from './Friends';
import FriendItem from './FriendItem/FriendItem';
import preloader from './../../image/Spinner.svg';

class FriendsAPI extends React.Component {

    componentDidMount() {
        this.props.getPage(this.props.currentPage, this.props.pageSize)
    }

    onChangePage = (newPage) => {
        this.props.getPage(newPage, this.props.pageSize)
    }

    render() {
        let friendsElements = this.props.friends.map((friend) => {
            return (
            <>
            {this.props.isFetching ? 
            <img style={{width: "97px", height: "97px", marginBottom:"30px"}} src={preloader}/> : 
            <FriendItem addUserFollow={this.props.addUserFollow} ChangeId={this.props.ChangeId} delUserFollow={this.props.delUserFollow} info={friend} isFollowing={this.props.isFollowing}/>}
            
            </>
            );
        });
    
        let totalPages = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    
        let pages = [];
    
        if(this.props.totalUsersCount !== 0){
            //for(let i = 1; i <= totalPages && i <= 30; i++){
            for(let i = totalPages - 10; i <= totalPages; i++){   
                pages.push(i);
            }
        }
        return <Friends isFetching={this.props.isFetching} onChangePage={this.onChangePage} currentPage={this.props.currentPage} friendsElements={friendsElements} pages={pages}/>
        
    }
}

let mapStateToProps = (state) => {
    return {
        friends: state.friendsPage.friends,
        pageSize: state.friendsPage.pageSize,
        totalUsersCount: state.friendsPage.totalUsersCount,
        currentPage: state.friendsPage.currentPage,
        isFetching: state.friendsPage.isFetching,
        isFollowing: state.friendsPage.isFollowing,
    }
};

const FriendItemContainer = connect(mapStateToProps, {AddUsers, SetUsers, GetUsersCount, ChangeId, 
    getPage, addUserFollow, delUserFollow })(FriendsAPI);
export default FriendItemContainer;