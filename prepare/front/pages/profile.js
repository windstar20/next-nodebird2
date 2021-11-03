import React, {useEffect} from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Router } from 'next/router';
import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';
import FollowerList from '../components/FollowerList';

const Profile = () => {
    // const followerList = [{nickname: '제로'},{nickname: '하나'},{nickname: '둘'}]
    // const followingList = [{nickname: '제로'},{nickname: '하나'},{nickname: '둘'}]
    const { me } = useSelector((state) => state.user);

    //로그인을 하지 않고, Profile 페이지에 접근한 경우처리
    useEffect(() => {
        if (!(me && me.id)) {
            Router.push('/');
        }
    }, [me && me.id]);
    if (!me) {
        return null;
    }

    return (
        <>
            <Head>
                <title>Profile</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="팔로잉 목록" data={me.Followings} />
                <FollowerList header="팔로워 목록" data={me.Followers} />
            </AppLayout>
        </>
    );
};

FollowList.propTypes = {
    header: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
};

export default Profile;
