import { NextPage } from "next";
import { AppProps } from "next/app";
import { type } from "os";

export type Admin = AppProps & {
    Component: Admin
}