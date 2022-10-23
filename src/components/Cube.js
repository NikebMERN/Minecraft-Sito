import { useBox } from "@react-three/cannon"
import { useState } from "react"
import { useStore } from "../hooks/useStore"
import * as textures from "../images/textures"


export const Cube = ({ position, texture }) => {
	/* A React hook that allows you to use state in a functional component. */
	const [isHovered, setIsHovered] = useState(false)
	/* A React hook that allows you to use state in a functional component. */
	const [ref] = useBox(() => ({
		type: 'Static',
		position
	}))
	/* A React hook that allows you to use state in a functional component. */
	const [addCube, removeCube] = useStore((state) => [state.addCube, state.removeCube])

	const activeTexture = textures[texture + 'Texture']



	return (
		/* A React component that renders a cube. */
		<mesh
			/* Adding a cube to the scene. */
/* A React event handler that is called when the mouse pointer is moved over the element. */
			onPointerMove={(e) => {
				e.stopPropagation()
				setIsHovered(true)
			}}
/* A React event handler that is called when the mouse pointer leaves the element it is bound to. */
			onPointerOut={(e) => {
				e.stopPropagation()
				setIsHovered(false)
			}}
			onClick={(e) => {
				e.stopPropagation()
				const clickedFace = Math.floor(e.faceIndex / 2)
				const { x, y, z } = ref.current.position
			/* Removing the cube. */
				if (e.altKey) {
					removeCube(x, y, z)
					return
				}
				/* Adding a cube to the scene. */
				else if (clickedFace === 0) {
					addCube(x + 1, y, z)
					return
				}
				else if (clickedFace === 1) {
					addCube(x - 1, y, z)
					return
				}
				else if (clickedFace === 2) {
					addCube(x, y + 1, z)
					return
				}
				else if (clickedFace === 3) {
					addCube(x, y - 1, z)
					return
				}
				else if (clickedFace === 4) {
					addCube(x, y, z + 1)
					return
				}
				else if (clickedFace === 5) {
					addCube(x, y, z - 1)
					return
				}
			}}
			ref={ref}
		>
			{/* Creating a cube. */}
			<boxBufferGeometry attach="geometry" />
			<meshStandardMaterial
				color={isHovered ? 'grey' : 'white'}
				map={activeTexture}
				transparent={true}
				opacity={texture === 'glass' ? 0.6 : 1}
				attach="material" />
		</mesh>
	)
}