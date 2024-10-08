import type { Config } from "@jest/types"

export default async (): Promise<Config.InitialOptions> => {
    return {
        preset: 'ts-jest',
        displayName: {
            name: "battleship",
            color: "greenBright"
        },
        verbose: true,
        setupFiles: ["dotenv/config"],
        testMatch: ["**/**/*.test.ts"],
        testEnvironment: 'node',
        detectOpenHandles: true,
        collectCoverage: true,
        transform: { 
            "\\.[jt]sx?$" : "babel-jest",
            "^.+\\.tsx?$": "ts-jest"},
        globalTeardown: "<rootDir>/test/jest-globals-teardown.ts",
        forceExit: true,
    }
}
