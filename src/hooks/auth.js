import {useAuthState, useSignOut} from 'react-firebase-hooks/auth'
import { auth, db } from '../lib/firebase';
import { useState } from 'react';
import { DASHBOARD, LOGIN } from '../lib/router';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { setDoc, doc } from 'firebase/firestore';
import isUsernameExits from '../utils/isUsernameExits';


export function useAuth() {
    const [authUser, isLoading, error] = useAuthState(auth);
    return {user: authUser, isLoading, error};
}

export function useLogin() {
    const [isLoading, setLoading] = useState(false);
    const toast  = useToast();
    const navigate = useNavigate();
    async function login({email, password, redirecto=DASHBOARD}){
        setLoading(true);

        try {
            await signInWithEmailAndPassword(auth, email, password);
            toast({
                title: 'Login Successful',
                status: 'success',
                duration: 3000,
                isClosable: true,
                position: "top"
            })
            navigate(redirecto);
        } catch (error) {
            toast({
                title: 'Login failed',
                description: error.message,
                status: 'error',
                duration: 3000,
                isClosable: true,
                position: "top"
            })
            setLoading(false);
            return false;
        }
        setLoading(false);
        return true;
    }

    return {login, isLoading}
}

export function useLogout(){
    // const [isLoading, setLoading] = useState(false);
    const [signOut, isLoading, error] = useSignOut(auth);
    const toast  = useToast();
    const navigate = useNavigate();
    const logout = async ()=>{
        if(await signOut()){
            toast({
                title: "successfully logout",
                status: "success",
                duration: 3000,
                isClosable: true,
                position: "top",
            })
            navigate(LOGIN);
        }
    }

    return ({logout, isLoading});
}

export function useRegister(){
    // const [register, isLoading, error] = useRegister(auth);
    const toast  = useToast();
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);
    async function register({username, email, password, redirecto = LOGIN}){
        setLoading(true);
        const usernameExits = await isUsernameExits(username);
        // const usernameExits = false;

        if(usernameExits){
            toast({
                title: 'Username already exists',
                description: 'Please try another username',
                status: 'error',
                duration: 3000,
                isClosable: true,
                position: "top"
                })
            setLoading(false);
        }else{
            try {
                const res = await createUserWithEmailAndPassword(auth, email, password);

                await setDoc(doc(db, "users", res.user.uid), {
                    id: res.user.uid,
                    username: username.toLowerCase(),
                    date: Date.now(),
                    avatar: ""
                });

                toast({
                    title: 'Account created',
                    description: 'You are logged in',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                    position: "top"
                    });
                    navigate(redirecto);
            } catch (error) {
                toast({
                    title: 'Signin up failed',
                    description: error.message,
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                    position: "top"
                    });
            } finally{
                setLoading(false);
            }
        }
        setLoading(false);
    }
    return ({register, isLoading});
}