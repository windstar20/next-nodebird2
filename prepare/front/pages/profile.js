import React from 'react';
import Head from "next/head";
import PropTypes from 'prop-types';
import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";
import FollowerList from "../components/FollowerList";

const Profile = () => {

    const followerList = [{nickname: '제로'},{nickname: '하나'},{nickname: '둘'}]
    const followingList = [{nickname: '제로'},{nickname: '하나'},{nickname: '둘'}]

    return (
        <>
            <Head>
                <title>Profile</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="팔로잉 목록" data={followingList}/>
                <FollowerList header="팔로워 목록" data={followerList}/>
            </AppLayout>
        </>
    )
}

FollowList.propTypes = {
    header: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired
};

export default Profile;