import React from 'react'
import { connect } from 'react-redux'
import { AddUsers, ChangePage, ChangeFollow, GetUsersCount, FetchPreloader, SetUsers, LoadFollow } from '../../redux/FriendsPageReducer';
import { ChangeFriend } from '../../redux/SidebarPageReducer';
import {ChangeId} from '../../redux/ProfilePageReducer'
import Friends from './Friends';
import FriendItem from './FriendItem/FriendItem';
import preloader from './../../image/Spinner.svg';
import { apiFunctions } from '../../api/api';

class FriendsAPI extends React.Component {

    componentDidMount() {
        apiFunctions.getUsers(this.props.currentPage, this.props.pageSize)
            .then((data) => {
                this.props.SetUsers(data.items);
                this.props.GetUsersCount(data.totalCount)
            });
    }

    onChangePage = (newPage) => {
        this.props.ChangePage(newPage);
        this.props.FetchPreloader(true)
        apiFunctions.getUsers(newPage, this.props.pageSize)
            .then((data) => {
                this.props.SetUsers(data.items);
                this.props.GetUsersCount(data.totalCount)
                this.props.FetchPreloader(false)
            });
    }

    render() {
        let friendsElements = this.props.friends.map((friend, index) => {
            return (
            <>
            {this.props.isFetching ? 
            <img style={{width: "97px", height: "97px", marginBottom:"30px"}} src={preloader}/> : 
            <FriendItem LoadFollow={this.props.LoadFollow} ChangeId={this.props.ChangeId} ChangeFollow={this.props.ChangeFollow} ChangeFriend={this.props.ChangeFriend} info={friend} isFollowing={this.props.isFollowing}/>}
            
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

const FriendItemContainer = connect(mapStateToProps, {ChangeFollow, AddUsers, SetUsers, GetUsersCount,
    ChangePage, FetchPreloader, ChangeFriend, ChangeId, LoadFollow })(FriendsAPI);
export default FriendItemContainer;